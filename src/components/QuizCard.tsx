import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Question } from '@/data/htmlQuestions';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface QuizCardProps {
  questions: Question[];
  type: 'html' | 'css' | 'js';
  answers: Record<number, number>;
  onAnswer: (questionId: number, selectedAnswer: number, isCorrect: boolean) => void;
  onReset: () => void;
}

export function QuizCard({ questions, type, answers, onAnswer, onReset }: QuizCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[currentIndex];
  const hasAnswered = currentQuestion && answers[currentQuestion.id] !== undefined;

  useEffect(() => {
    if (hasAnswered) {
      setSelectedOption(answers[currentQuestion.id]);
      setShowResult(true);
    } else {
      setSelectedOption(null);
      setShowResult(false);
    }
  }, [currentIndex, hasAnswered, answers, currentQuestion]);

  const handleOptionClick = (optionIndex: number) => {
    if (hasAnswered) return;
    
    setSelectedOption(optionIndex);
    setShowResult(true);
    
    const isCorrect = optionIndex === currentQuestion.correctAnswer;
    onAnswer(currentQuestion.id, optionIndex, isCorrect);
  };

  const goToNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const getOptionClass = (index: number) => {
    if (!showResult) {
      return selectedOption === index ? 'selected' : '';
    }
    
    if (index === currentQuestion.correctAnswer) {
      return 'correct';
    }
    
    if (selectedOption === index && index !== currentQuestion.correctAnswer) {
      return 'incorrect';
    }
    
    return '';
  };

  const colorClasses = {
    html: { border: 'border-html/30', glow: 'glow-html', gradient: 'gradient-html' },
    css: { border: 'border-css/30', glow: 'glow-css', gradient: 'gradient-css' },
    js: { border: 'border-js/30', glow: 'glow-js', gradient: 'gradient-js' },
  };

  return (
    <div className={cn("glass-card rounded-xl border p-4 md:p-6", colorClasses[type].border, colorClasses[type].glow)}>
      {/* Question number and navigation */}
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <div className={cn(
          "px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium",
          colorClasses[type].gradient,
          "text-primary-foreground"
        )}>
          {currentIndex + 1} / {questions.length}
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={onReset}
          className="gap-1.5 md:gap-2 text-xs md:text-sm px-2 md:px-3"
        >
          <RotateCcw className="w-3 h-3 md:w-4 md:h-4" />
          <span className="hidden sm:inline">Qayta boshlash</span>
          <span className="sm:hidden">Reset</span>
        </Button>
      </div>

      {/* Question */}
      <h2 className="text-base md:text-xl font-semibold mb-4 md:mb-6 text-foreground leading-relaxed">
        {currentQuestion?.question}
      </h2>

      {/* Options */}
      <div className="space-y-2 md:space-y-3 mb-6">
        {currentQuestion?.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            disabled={hasAnswered}
            className={cn(
              "option-button font-mono text-xs md:text-sm",
              getOptionClass(index),
              hasAnswered && "cursor-default"
            )}
          >
            <span className={cn(
              "inline-flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-lg mr-2 md:mr-3 font-semibold text-xs md:text-sm flex-shrink-0",
              "bg-muted text-muted-foreground",
              getOptionClass(index) === 'correct' && "bg-success text-success-foreground",
              getOptionClass(index) === 'incorrect' && "bg-destructive text-destructive-foreground"
            )}>
              {String.fromCharCode(65 + index)}
            </span>
            <span className="break-words">{option}</span>
          </button>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <Button
          variant="outline"
          onClick={goToPrev}
          disabled={currentIndex === 0}
          className="gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Oldingi
        </Button>

        {/* Quick navigation */}
        <div className="hidden md:flex items-center gap-1 flex-wrap max-w-md justify-center">
          {questions.slice(
            Math.max(0, currentIndex - 2),
            Math.min(questions.length, currentIndex + 3)
          ).map((q, i) => {
            const actualIndex = Math.max(0, currentIndex - 2) + i;
            const isAnswered = answers[q.id] !== undefined;
            const isCorrect = answers[q.id] === q.correctAnswer;
            
            return (
              <button
                key={q.id}
                onClick={() => setCurrentIndex(actualIndex)}
                className={cn(
                  "w-8 h-8 rounded-lg text-xs font-medium transition-all",
                  actualIndex === currentIndex && "ring-2 ring-primary",
                  isAnswered && isCorrect && "bg-success/20 text-success",
                  isAnswered && !isCorrect && "bg-destructive/20 text-destructive",
                  !isAnswered && "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {actualIndex + 1}
              </button>
            );
          })}
        </div>

        <Button
          variant="outline"
          onClick={goToNext}
          disabled={currentIndex === questions.length - 1}
          className="gap-2"
        >
          Keyingi
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

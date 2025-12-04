import { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { QuizCard } from '@/components/QuizCard';
import { StatsBox } from '@/components/StatsBox';
import { jsQuestions } from '@/data/jsQuestions';
import { getQuizProgress, saveQuizProgress, resetQuizProgress, QuizProgress } from '@/lib/storage';
import { Braces, Code, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const JsQuiz = () => {
  const [progress, setProgress] = useState<QuizProgress>(() => getQuizProgress('js'));

  useEffect(() => {
    saveQuizProgress('js', progress);
  }, [progress]);

  const handleAnswer = (questionId: number, selectedAnswer: number, isCorrect: boolean) => {
    if (progress.answers[questionId] !== undefined) return;
    
    setProgress(prev => ({
      answers: { ...prev.answers, [questionId]: selectedAnswer },
      correctCount: isCorrect ? prev.correctCount + 1 : prev.correctCount,
      incorrectCount: !isCorrect ? prev.incorrectCount + 1 : prev.incorrectCount,
      totalAnswered: prev.totalAnswered + 1,
    }));
  };

  const handleReset = () => {
    resetQuizProgress('js');
    setProgress({ answers: {}, correctCount: 0, incorrectCount: 0, totalAnswered: 0 });
  };

  return (
    <Layout>
      <div className="min-h-screen p-4 sm:p-6 md:p-12 pt-16 md:pt-12">
        {/* Header */}
        <header className="mb-8 animate-fade-in">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl gradient-js flex items-center justify-center glow-js">
              <Braces className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">JavaScript Testlar</h1>
              <p className="text-muted-foreground">100 ta savol • ES6+, DOM, async/await</p>
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Quiz Card */}
          <div className="lg:col-span-2 animate-slide-up">
            <QuizCard
              questions={jsQuestions}
              type="js"
              answers={progress.answers}
              onAnswer={handleAnswer}
              onReset={handleReset}
            />
          </div>

          {/* Stats and Algorithms Link */}
          <div className="space-y-6">
            <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
              <StatsBox
                total={jsQuestions.length}
                correct={progress.correctCount}
                incorrect={progress.incorrectCount}
                type="js"
              />
            </div>

            {/* Algorithms button */}
            <div className="animate-slide-up glass-card p-6 rounded-xl border border-js/30 glow-js" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center gap-3 mb-3">
                <Code className="w-6 h-6 text-js" />
                <h3 className="font-semibold text-foreground">Algoritmlar</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                80 ta amaliy algoritm mashqlari. Kod yozib, bilimingizni mustahkamlang.
              </p>
              <Link to="/algorithms">
                <Button className="w-full gap-2 gradient-js text-primary-foreground hover:opacity-90">
                  Algoritmlarni ko'rish
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JsQuiz;

import { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { QuizCard } from '@/components/QuizCard';
import { StatsBox } from '@/components/StatsBox';
import { htmlQuestions } from '@/data/htmlQuestions';
import { getQuizProgress, saveQuizProgress, resetQuizProgress, QuizProgress } from '@/lib/storage';
import { Code2 } from 'lucide-react';

const HtmlQuiz = () => {
  const [progress, setProgress] = useState<QuizProgress>(() => getQuizProgress('html'));

  useEffect(() => {
    saveQuizProgress('html', progress);
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
    resetQuizProgress('html');
    setProgress({ answers: {}, correctCount: 0, incorrectCount: 0, totalAnswered: 0 });
  };

  return (
    <Layout>
      <div className="min-h-screen p-4 sm:p-6 md:p-12 pt-16 md:pt-12">
        {/* Header */}
        <header className="mb-8 animate-fade-in">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl gradient-html flex items-center justify-center glow-html">
              <Code2 className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">HTML Testlar</h1>
              <p className="text-muted-foreground">100 ta savol • Teglar, atributlar, semantik HTML</p>
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Quiz Card */}
          <div className="lg:col-span-2 animate-slide-up">
            <QuizCard
              questions={htmlQuestions}
              type="html"
              answers={progress.answers}
              onAnswer={handleAnswer}
              onReset={handleReset}
            />
          </div>

          {/* Stats */}
          <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
            <StatsBox
              total={htmlQuestions.length}
              correct={progress.correctCount}
              incorrect={progress.incorrectCount}
              type="html"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HtmlQuiz;

import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { AlgorithmCard } from '@/components/AlgorithmCard';
import { algorithms } from '@/data/algorithms';
import { getAlgorithmProgress, markAlgorithmComplete, removeAlgorithmComplete, resetAlgorithmProgress, AlgorithmProgress } from '@/lib/storage';
import { Code, Filter, CheckCircle, XCircle, RotateCcw, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

type DifficultyFilter = 'all' | 'oson' | "o'rta" | 'qiyin';

const Algorithms = () => {
  const [progress, setProgress] = useState<AlgorithmProgress>(() => getAlgorithmProgress());
  const [filter, setFilter] = useState<DifficultyFilter>('all');
  const [showCompleted, setShowCompleted] = useState<'all' | 'completed' | 'pending'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleComplete = (id: number) => {
    markAlgorithmComplete(id);
    setProgress(getAlgorithmProgress());
  };

  const handleRemove = (id: number) => {
    removeAlgorithmComplete(id);
    setProgress(getAlgorithmProgress());
  };

  const handleResetAll = () => {
    if (confirm("Barcha algoritmlar progressini o'chirmoqchimisiz?")) {
      resetAlgorithmProgress();
      setProgress(getAlgorithmProgress());
    }
  };

  const filteredAlgorithms = algorithms.filter(alg => {
    if (filter !== 'all' && alg.difficulty !== filter) return false;
    
    const isCompleted = progress.completedIds.includes(alg.id);
    if (showCompleted === 'completed' && !isCompleted) return false;
    if (showCompleted === 'pending' && isCompleted) return false;
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return alg.title.toLowerCase().includes(query) || 
             alg.description.toLowerCase().includes(query);
    }
    
    return true;
  });

  const completedCount = progress.completedIds.length;
  const totalCount = algorithms.length;

  return (
    <Layout>
      <div className="min-h-screen p-3 sm:p-4 md:p-6 lg:p-12 pt-14 sm:pt-16 md:pt-12">
        {/* Header */}
        <header className="mb-4 sm:mb-6 md:mb-8 animate-fade-in">
          <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl gradient-js flex items-center justify-center glow-js flex-shrink-0">
              <Code className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary-foreground" />
            </div>
            <div className="min-w-0">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground truncate">Algoritmlar</h1>
              <p className="text-xs sm:text-sm text-muted-foreground">80 ta amaliy mashqlar</p>
            </div>
          </div>
        </header>

        {/* Stats Bar */}
        <div className="glass-card p-3 sm:p-4 rounded-xl border border-border mb-4 sm:mb-6 animate-slide-up">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <div className="flex items-center justify-between sm:justify-start gap-4 sm:gap-6">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
                <span className="text-foreground font-medium text-sm sm:text-base">{completedCount}</span>
                <span className="text-muted-foreground text-xs sm:text-sm">bajarildi</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                <span className="text-foreground font-medium text-sm sm:text-base">{totalCount - completedCount}</span>
                <span className="text-muted-foreground text-xs sm:text-sm">qoldi</span>
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="flex items-center gap-2 sm:gap-3 flex-1">
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full gradient-js transition-all duration-500"
                  style={{ width: `${(completedCount / totalCount) * 100}%` }}
                />
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                {Math.round((completedCount / totalCount) * 100)}%
              </span>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={handleResetAll}
              className="gap-1.5 sm:gap-2 text-xs sm:text-sm h-8 sm:h-9 self-end sm:self-auto"
            >
              <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline">Hammasini</span> qaytadan
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="glass-card p-3 sm:p-4 rounded-xl border border-border mb-4 sm:mb-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
          <div className="flex flex-col gap-3">
            {/* Search */}
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Qidirish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-9 sm:h-10 text-sm"
              />
            </div>

            <div className="flex flex-col xs:flex-row gap-2 sm:gap-4">
              {/* Difficulty Filter */}
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1">
                <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <div className="flex gap-1">
                  {(['all', 'oson', "o'rta", 'qiyin'] as DifficultyFilter[]).map((level) => (
                    <button
                      key={level}
                      onClick={() => setFilter(level)}
                      className={cn(
                        "px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap",
                        filter === level 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      )}
                    >
                      {level === 'all' ? 'Hammasi' : level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Completion Filter */}
              <div className="flex gap-1 overflow-x-auto pb-1">
                {(['all', 'pending', 'completed'] as const).map((status) => (
                  <button
                    key={status}
                    onClick={() => setShowCompleted(status)}
                    className={cn(
                      "px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap",
                      showCompleted === status 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    )}
                  >
                    {status === 'all' ? 'Hammasi' : status === 'completed' ? 'Bajarilgan' : 'Bajarilmagan'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Algorithms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
          {filteredAlgorithms.map((algorithm) => (
            <AlgorithmCard
              key={algorithm.id}
              algorithm={algorithm}
              isCompleted={progress.completedIds.includes(algorithm.id)}
              onComplete={handleComplete}
              onRemove={handleRemove}
            />
          ))}
        </div>

        {filteredAlgorithms.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-muted-foreground text-sm sm:text-base">Hech qanday algoritm topilmadi</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Algorithms;
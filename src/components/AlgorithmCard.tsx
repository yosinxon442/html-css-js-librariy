import { useState } from 'react';
import { Algorithm } from '@/data/algorithms';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp, Check, RotateCcw, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AlgorithmCardProps {
  algorithm: Algorithm;
  isCompleted: boolean;
  onComplete: (id: number) => void;
  onRemove: (id: number) => void;
}

export function AlgorithmCard({ algorithm, isCompleted, onComplete, onRemove }: AlgorithmCardProps) {
  const [showSolution, setShowSolution] = useState(false);

  const difficultyColors = {
    'oson': 'bg-success/20 text-success border-success/30',
    "o'rta": 'bg-primary/20 text-primary border-primary/30',
    'qiyin': 'bg-destructive/20 text-destructive border-destructive/30',
  };

  return (
    <div className={cn(
      "glass-card rounded-xl border border-border p-5 transition-all duration-300",
      isCompleted && "border-success/50 bg-success/5"
    )}>
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-sm font-mono text-muted-foreground">#{algorithm.id}</span>
            <span className={cn(
              "px-2 py-0.5 rounded-full text-xs font-medium border",
              difficultyColors[algorithm.difficulty]
            )}>
              {algorithm.difficulty}
            </span>
            {isCompleted && (
              <span className="flex items-center gap-1 text-xs text-success">
                <Check className="w-3 h-3" />
                Bajarildi
              </span>
            )}
          </div>
          <h3 className="font-semibold text-foreground">{algorithm.title}</h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-3">{algorithm.description}</p>

      {/* Example */}
      <div className="bg-muted/50 rounded-lg p-3 mb-4 font-mono text-sm text-foreground">
        <span className="text-muted-foreground">Misol: </span>
        {algorithm.example}
      </div>

      {/* Solution toggle */}
      <button
        onClick={() => setShowSolution(!showSolution)}
        className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors mb-4"
      >
        <Code className="w-4 h-4" />
        {showSolution ? "Yechimni yashirish" : "Yechimni ko'rish"}
        {showSolution ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>

      {/* Solution code */}
      {showSolution && (
        <div className="bg-background rounded-lg p-4 mb-4 overflow-x-auto animate-fade-in">
          <pre className="text-sm font-mono text-foreground whitespace-pre-wrap">
            {algorithm.solution}
          </pre>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-3">
        {!isCompleted ? (
          <Button
            onClick={() => onComplete(algorithm.id)}
            className="gap-2"
            size="sm"
          >
            <Check className="w-4 h-4" />
            Bajardim
          </Button>
        ) : (
          <Button
            onClick={() => onRemove(algorithm.id)}
            variant="outline"
            size="sm"
            className="gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Qaytadan ishlash
          </Button>
        )}
      </div>
    </div>
  );
}

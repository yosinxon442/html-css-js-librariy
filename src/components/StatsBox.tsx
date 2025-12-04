import { cn } from '@/lib/utils';
import { CheckCircle, XCircle, HelpCircle } from 'lucide-react';

interface StatsBoxProps {
  total: number;
  correct: number;
  incorrect: number;
  type: 'html' | 'css' | 'js';
}

export function StatsBox({ total, correct, incorrect, type }: StatsBoxProps) {
  const remaining = total - correct - incorrect;
  
  const colorClasses = {
    html: 'glow-html border-html/30',
    css: 'glow-css border-css/30',
    js: 'glow-js border-js/30',
  };

  return (
    <div className={cn(
      "glass-card p-6 rounded-xl border",
      colorClasses[type]
    )}>
      <h3 className="text-lg font-semibold mb-4 text-foreground">Statistika</h3>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="stat-box bg-success/10 border border-success/30">
          <CheckCircle className="w-6 h-6 text-success" />
          <span className="text-2xl font-bold text-success">{correct}</span>
          <span className="text-xs text-muted-foreground">To'g'ri</span>
        </div>
        
        <div className="stat-box bg-destructive/10 border border-destructive/30">
          <XCircle className="w-6 h-6 text-destructive" />
          <span className="text-2xl font-bold text-destructive">{incorrect}</span>
          <span className="text-xs text-muted-foreground">Noto'g'ri</span>
        </div>
        
        <div className="stat-box bg-muted border border-border">
          <HelpCircle className="w-6 h-6 text-muted-foreground" />
          <span className="text-2xl font-bold text-foreground">{remaining}</span>
          <span className="text-xs text-muted-foreground">Qoldi</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-4">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Bajarildi</span>
          <span>{correct + incorrect} / {total}</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className={cn(
              "h-full transition-all duration-500",
              type === 'html' ? 'gradient-html' : type === 'css' ? 'gradient-css' : 'gradient-js'
            )}
            style={{ width: `${((correct + incorrect) / total) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}

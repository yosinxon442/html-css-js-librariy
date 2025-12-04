// Local storage utilities for quiz progress

export interface QuizProgress {
  answers: Record<number, number>; // questionId -> selectedAnswer
  correctCount: number;
  incorrectCount: number;
  totalAnswered: number;
}

export interface AlgorithmProgress {
  completedIds: number[];
}

const STORAGE_KEYS = {
  HTML_PROGRESS: 'quiz_html_progress',
  CSS_PROGRESS: 'quiz_css_progress',
  JS_PROGRESS: 'quiz_js_progress',
  ALGORITHM_PROGRESS: 'algorithm_progress',
};

export function getQuizProgress(type: 'html' | 'css' | 'js'): QuizProgress {
  const key = type === 'html' ? STORAGE_KEYS.HTML_PROGRESS : 
              type === 'css' ? STORAGE_KEYS.CSS_PROGRESS : 
              STORAGE_KEYS.JS_PROGRESS;
  
  const stored = localStorage.getItem(key);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return { answers: {}, correctCount: 0, incorrectCount: 0, totalAnswered: 0 };
    }
  }
  return { answers: {}, correctCount: 0, incorrectCount: 0, totalAnswered: 0 };
}

export function saveQuizProgress(type: 'html' | 'css' | 'js', progress: QuizProgress): void {
  const key = type === 'html' ? STORAGE_KEYS.HTML_PROGRESS : 
              type === 'css' ? STORAGE_KEYS.CSS_PROGRESS : 
              STORAGE_KEYS.JS_PROGRESS;
  
  localStorage.setItem(key, JSON.stringify(progress));
}

export function resetQuizProgress(type: 'html' | 'css' | 'js'): void {
  const key = type === 'html' ? STORAGE_KEYS.HTML_PROGRESS : 
              type === 'css' ? STORAGE_KEYS.CSS_PROGRESS : 
              STORAGE_KEYS.JS_PROGRESS;
  
  localStorage.removeItem(key);
}

export function getAlgorithmProgress(): AlgorithmProgress {
  const stored = localStorage.getItem(STORAGE_KEYS.ALGORITHM_PROGRESS);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return { completedIds: [] };
    }
  }
  return { completedIds: [] };
}

export function saveAlgorithmProgress(progress: AlgorithmProgress): void {
  localStorage.setItem(STORAGE_KEYS.ALGORITHM_PROGRESS, JSON.stringify(progress));
}

export function markAlgorithmComplete(id: number): void {
  const progress = getAlgorithmProgress();
  if (!progress.completedIds.includes(id)) {
    progress.completedIds.push(id);
    saveAlgorithmProgress(progress);
  }
}

export function removeAlgorithmComplete(id: number): void {
  const progress = getAlgorithmProgress();
  progress.completedIds = progress.completedIds.filter(cid => cid !== id);
  saveAlgorithmProgress(progress);
}

export function resetAlgorithmProgress(): void {
  localStorage.removeItem(STORAGE_KEYS.ALGORITHM_PROGRESS);
}

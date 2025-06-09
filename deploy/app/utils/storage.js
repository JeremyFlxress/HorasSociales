const EXAM_PROGRESS_KEY = 'jsCertExamProgress';

export const saveExamProgress = (progress) => {
  if (progress) {
    localStorage.setItem(EXAM_PROGRESS_KEY, JSON.stringify(progress));
  } else {
    localStorage.removeItem(EXAM_PROGRESS_KEY);
  }
};

export const loadExamProgress = () => {
  const saved = localStorage.getItem(EXAM_PROGRESS_KEY);
  return saved ? JSON.parse(saved) : null;
};

export const clearExamProgress = () => {
  localStorage.removeItem(EXAM_PROGRESS_KEY);
};
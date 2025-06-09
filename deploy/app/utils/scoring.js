export const calculateScore = (questions, answers) => {
  return questions.reduce((total, question) => {
    // Normalizar ambas respuestas para comparación insensible a mayúsculas/minúsculas
    const userAnswer = String(answers[question.id] || '').toUpperCase().trim();
    const correctAnswer = String(question.answer || '').toUpperCase().trim();
    
    return userAnswer === correctAnswer 
      ? total + (question.points || 1) // Usar 1 punto por defecto si no está definido
      : total;
  }, 0);
};

export const calculatePercentage = (score, totalPoints) => {
  return Math.round((score / totalPoints) * 100);
};

export const determinePassStatus = (score, passingScore) => {
  return score >= passingScore;
};
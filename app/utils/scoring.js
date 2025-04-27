export const calculateScore = (questions, answers) => {
    return questions.reduce((total, question) => {
      return answers[question.id] === question.answer 
        ? total + question.points 
        : total;
    }, 0);
  };
  
  export const calculatePercentage = (score, totalPoints) => {
    return Math.round((score / totalPoints) * 100);
  };
  
  export const determinePassStatus = (score, passingScore) => {
    return score >= passingScore;
  };
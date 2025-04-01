import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import questions from './allquestions';

const QuizPage = () => {
  const [timeLeft, setTimeLeft] = useState(50 * 60);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const navigate = useNavigate();

  // Barajar preguntas al inicio
  useEffect(() => {
    const shuffled = [...questions]
      .sort(() => Math.random() - 0.5)
      .slice(0, 35); // Tomar solo 35 preguntas aleatorias
    setShuffledQuestions(shuffled);
  }, []);

  const calculateScore = () => {
    let totalScore = 0;
    Object.entries(userAnswers).forEach(([index, answer]) => {
      const question = shuffledQuestions[parseInt(index)];
      if (answer === question.correctAnswer) {
        totalScore += question.points;
      }
    });
    return totalScore;
  };

  const handleNext = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Finalizar examen y calcular puntuación
      const finalScore = calculateScore();
      setScore(finalScore);
      // Aquí puedes enviar el score a tu backend o guardar localmente
      navigate('/results', { state: { score: finalScore } });
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleAnswerSelect = (answer) => {
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: answer
    }));
  };

  // Timer logic...
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          const finalScore = calculateScore();
          setScore(finalScore);
          navigate('/results', { state: { score: finalScore } });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  if (shuffledQuestions.length === 0) return <div>Loading...</div>;

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      {/* Header */}
      <div className="header">
        <span className="question-count">Question {currentQuestionIndex + 1} of 35</span>
        <div className="timer">Time Remaining: {formatTime(timeLeft)}</div>
      </div>

      {/* Question Section */}
      <div className="question-section">
        <p>{currentQuestion.question}</p>
        {currentQuestion.image && (
          <img 
            src={currentQuestion.image} 
            alt="Question visual" 
            className="question-image"
          />
        )}
      </div>

      {/* Options Section */}
      <div className="options-section">
        {currentQuestion.options.map((option, index) => (
          <div key={index} className="option">
            <label>
              <input 
                type="radio" 
                name="answer" 
                value={option}
                checked={userAnswers[currentQuestionIndex] === option}
                onChange={() => handleAnswerSelect(option)}
              /> 
              {option}
            </label>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="navigation">
        <div className="tools-section">
          <a href="#">Go to Summary</a>
          <a href="#">Mark for Review</a>
          <a href="#">Mark for Feedback</a>
          <a href="#">Tools</a>
        </div>
        <div className="buttons-container">
          <button 
            onClick={handleBack} 
            className="nav-button back-button"
            disabled={currentQuestionIndex === 0}
          >
            Back
          </button>
          <button 
            onClick={handleNext} 
            className="nav-button next-button"
          >
            {currentQuestionIndex === shuffledQuestions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
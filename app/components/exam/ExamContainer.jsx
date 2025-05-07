
import React, { useState } from 'react';

export default function ExamContainer({ question, questionNumber, totalQuestions, onAnswer }) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [fillBlankValue, setFillBlankValue] = useState('');
  
    const handleSubmit = () => {
      const answer = question.type === 'multiple-choice' ? selectedOption : fillBlankValue;
      onAnswer(question.id, answer);
      setSelectedOption(null);
      setFillBlankValue('');
    };
  
    return (
      <div className="exam-container">
        <div className="progress-info">
          <span>Question {questionNumber} of {totalQuestions}</span>
          <div className="progress-bar">
            <div style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}></div>
          </div>
        </div>
  
        <div className="question-content">
          <h3>{question.text}</h3>
          
          {question.code && (
            <pre className="code-block">
              <code>{question.code}</code>
            </pre>
          )}
  
          {question.type === 'multiple-choice' ? (
            <div className="options">
              {question.options.map((option, index) => (
                <div 
                  key={index} 
                  className={`option ${selectedOption === option[0] ? 'selected' : ''}`}
                  onClick={() => setSelectedOption(option[0])}
                >
                  {option}
                </div>
              ))}
            </div>
          ) : (
            <div className="fill-blank">
              <input
                type="text"
                value={fillBlankValue}
                onChange={(e) => setFillBlankValue(e.target.value)}
                placeholder="Enter your answer"
              />
            </div>
          )}
        </div>
  
        <button 
          className="submit-button"
          onClick={handleSubmit}
          disabled={question.type === 'multiple-choice' ? !selectedOption : !fillBlankValue}
        >
          {questionNumber === totalQuestions ? 'Finish Exam' : 'Next Question'}
        </button>
      </div>
    );
  }
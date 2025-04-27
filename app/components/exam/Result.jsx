export default function Results({ questions, answers, score, examConfig }) {
    const passed = score >= examConfig.passingScore;
    const percentage = Math.round((score / examConfig.totalPoints) * 100);
  
    return (
      <div className="results-container">
        <h1>Exam Results</h1>
        
        <div className="score-summary">
          <div className={`score-display ${passed ? 'passed' : 'failed'}`}>
            <span>Your Score:</span>
            <span className="score">{score}/{examConfig.totalPoints}</span>
            <span>({percentage}%)</span>
          </div>
          <div className="result-status">
            {passed ? (
              <span className="passed">Congratulations! You passed!</span>
            ) : (
              <span className="failed">You did not pass. Please try again.</span>
            )}
          </div>
        </div>
  
        <div className="detailed-results">
          <h2>Question Review</h2>
          <div className="questions-grid">
            {questions.map((question, index) => {
              const isCorrect = answers[question.id] === question.answer;
              return (
                <div key={question.id} className={`question-review ${isCorrect ? 'correct' : 'incorrect'}`}>
                  <div className="question-header">
                    <span>Question {index + 1}</span>
                    <span className="points">{isCorrect ? `+${question.points}` : '0'} pts</span>
                  </div>
                  <div className="question-content">
                    <p>{question.text}</p>
                    {question.code && (
                      <pre className="code-block">
                        <code>{question.code}</code>
                      </pre>
                    )}
                  </div>
                  <div className="answer-section">
                    <div className="user-answer">
                      <strong>Your Answer:</strong> {answers[question.id] || 'Not answered'}
                    </div>
                    {!isCorrect && (
                      <div className="correct-answer">
                        <strong>Correct Answer:</strong> {question.answer}
                      </div>
                    )}
                    <div className="explanation">
                      {question.explanation}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
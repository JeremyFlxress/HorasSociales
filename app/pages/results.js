'use client';
import { useRouter } from 'next/router';
import { questions, examConfig } from '../data/questions';
import Header from '../components/exam/Header.jsx';

export default function ResultsPage() {
  const router = useRouter();
  const { score, answers } = router.query;

  // Parse the answers from URL query
  const parsedAnswers = answers ? JSON.parse(decodeURIComponent(answers)) : {};
  const numericScore = score ? parseInt(score) : 0;

  // Calculate results
  const passed = numericScore >= examConfig.passingScore;
  const percentage = Math.round((numericScore / examConfig.totalPoints) * 100);

  return (
    <div className="results-container">
      <Header />
      <h1>Exam Results</h1>
      
      <div className="score-summary">
        <h2>Your Score: {numericScore}/{examConfig.totalPoints} ({percentage}%)</h2>
        <p className={passed ? 'passed' : 'failed'}>
          {passed ? 'Congratulations! You passed!' : 'You did not pass. Please try again.'}
        </p>
      </div>

      <div className="questions-review">
        <h2>Question Review</h2>
        {questions.map((question, index) => {
          const isCorrect = parsedAnswers[question.id] === question.answer;
          return (
            <div key={question.id} className={`question ${isCorrect ? 'correct' : 'incorrect'}`}>
              <h3>Question {index + 1}</h3>
              <p>{question.text}</p>
              {question.code && <pre><code>{question.code}</code></pre>}
              <div className="answer-info">
                <p>Your answer: {parsedAnswers[question.id] || 'Not answered'}</p>
                {!isCorrect && <p>Correct answer: {question.answer}</p>}
                <p className="explanation">{question.explanation}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem' }}>
        <button
          className="nav-button submit-button"
          onClick={() => router.push('/exam-selection')}
          style={{ minWidth: 220 }}
        >
          Finalizar intento
        </button>
      </div>
    </div>
  );
}
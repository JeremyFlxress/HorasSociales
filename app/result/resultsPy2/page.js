'use client';

// Esto desactiva completamente el prerenderizado estático
export const dynamic = 'force-dynamic';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { questions, examConfig } from '../../data/questionsPy2';
import '../styles/results.css'; // Importamos los estilos CSS

export default function ResultsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Obtener parámetros
  const scoreParam = searchParams.get('score');
  const answersParam = searchParams.get('answers');

  // Redirigir si faltan parámetros
  useEffect(() => {
    if (!scoreParam || !answersParam) {
      router.push('../../exams/examPy2');
    }
  }, [scoreParam, answersParam, router]);

  if (!scoreParam || !answersParam) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p className="loading-text">Redirigiendo...</p>
      </div>
    );
  }

  // Procesar resultados
  const score = parseInt(scoreParam);
  const answers = JSON.parse(decodeURIComponent(answersParam));
  const passed = score >= examConfig.passingScore;
  const percentageScore = Math.round((score / examConfig.totalPoints) * 100);

  // Calcular estadísticas
  const answeredCount = Object.keys(answers).length;
  const unansweredCount = questions.length - answeredCount;
  const correctCount = Object.keys(answers).filter(id => 
    answers[id] === questions.find(q => q.id === parseInt(id))?.answer
  ).length;
  const incorrectCount = answeredCount - correctCount;

  return (
    <div className="results-page">
      <header className="results-header">
        <div className="container">
          <h1>Resultados del Examen</h1>
        </div>
      </header>

      <div className="container">
        <div className={`result-card ${passed ? 'passed' : 'failed'}`}>
          <div className="result-header">
            <h2>Tu puntuación</h2>
            <div className={`result-badge ${passed ? 'passed' : 'failed'}`}>
              {passed ? '✅ Aprobado' : '❌ Reprobado'}
            </div>
          </div>

          <div className="score-container">
            <div className="score-circle">
              <svg viewBox="0 0 36 36">
                <path 
                  className="score-circle-bg"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path 
                  className={`score-circle-progress ${passed ? 'passed' : 'failed'}`}
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  strokeDasharray={`${percentageScore}, 100`}
                />
                <text x="18" y="20.5" className="score-text">
                  {percentageScore}%
                </text>
              </svg>
            </div>
          </div>

          <div className="score-details">
            <p className="score-value">{score} de {examConfig.totalPoints} puntos</p>
            <p className="score-min">Puntuación mínima para aprobar: {examConfig.passingScore} puntos</p>
          </div>
        </div>

        <div className="questions-summary">
          <h2>Resumen de respuestas</h2>
          
          <div className="stats-grid">
            <div className="stat-card answered">
              <div className="stat-number">{answeredCount}</div>
              <span className="stat-label">Preguntas respondidas</span>
            </div>
            
            <div className="stat-card unanswered">
              <div className="stat-number">{unansweredCount}</div>
              <span className="stat-label">Preguntas sin responder</span>
            </div>
            
            <div className="stat-card correct">
              <div className="stat-number">{correctCount}</div>
              <span className="stat-label">Respuestas correctas</span>
            </div>
            
            <div className="stat-card incorrect">
              <div className="stat-number">{incorrectCount}</div>
              <span className="stat-label">Respuestas incorrectas</span>
            </div>
          </div>
        </div>

        <div className="questions-review">
          <h2>Revisión detallada</h2>
          
          {questions.map((q, i) => {
            const isCorrect = answers[q.id] === q.answer;
            const answered = q.id in answers;
            
            return (
              <div key={q.id} className={`question-card ${
                !answered ? 'unanswered' : isCorrect ? 'correct' : 'incorrect'
              }`}>
                <div className="question-header">
                  <h3>
                    <span className="question-indicator">
                      {!answered ? '?' : isCorrect ? '✓' : '✗'}
                    </span>
                    Pregunta {i+1}
                  </h3>
                </div>
                
                <div className="question-body">
                  <p className="question-text">{q.text}</p>
                  
                  {q.code && (
                    <pre className="code-block">
                      <code>{q.code}</code>
                    </pre>
                  )}
                  
                  {q.options && (
                    <div className="options-list">
                      {q.options.map((option, optIndex) => (
                        <div 
                          key={optIndex} 
                          className={`option-item ${
                            answers[q.id] === option[0] && !isCorrect ? 'selected-wrong' : 
                            (option[0] === q.answer) ? 'correct-answer' : 
                            answers[q.id] === option[0] ? 'selected' : ''
                          }`}
                        >
                          {option}
                          {option[0] === q.answer && <span className="check-mark">✓</span>}
                          {answers[q.id] === option[0] && !isCorrect && <span className="x-mark">✗</span>}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="answer-details">
                    {!answered ? (
                      <p className="no-answer">Sin responder</p>
                    ) : (
                      <>
                        <p className="user-answer">
                          <span className="answer-label">Tu respuesta: </span>
                          <span className={isCorrect ? 'correct-text' : 'incorrect-text'}>
                            {answers[q.id]}
                          </span>
                        </p>
                        
                        {!isCorrect && (
                          <p className="correct-answer-text">
                            <span className="answer-label">Respuesta correcta: </span>
                            <span className="correct-text">{q.answer}</span>
                          </p>
                        )}
                      </>
                    )}
                    
                    <div className="explanation-box">
                      <span className="explanation-label">Explicación: </span>
                      {q.explanation}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="action-buttons">
          <button 
            onClick={() => router.push('../../exams/examPy2')}
            className="retry-button"
          >
            Volver a intentar
          </button>
        </div>
      </div>
    </div>
  );
}
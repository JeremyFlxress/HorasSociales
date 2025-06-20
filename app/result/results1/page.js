'use client';

// Esto desactiva completamente el prerenderizado estático
export const dynamic = 'force-dynamic';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { questions, examConfig } from '../../data/questions1';
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
      router.push('../../exams/exam1');
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
  const correctCount = Object.keys(answers).filter(id => {
    const question = questions.find(q => q.id === parseInt(id));
    if (!question) return false;
    if (question.type === "fill-blank") {
      return typeof answers[id] === "string" && 
             answers[id].toLowerCase().trim() === question.answer.toLowerCase().trim();
    }
    return answers[id] === question.answer;
  }).length;
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
          <h2>Revisión de preguntas</h2>
          {questions.map((q, i) => {
            let isCorrect;
            if (q.type === "fill-blank") {
              isCorrect = typeof answers[q.id] === "string" && 
                         answers[q.id].toLowerCase().trim() === q.answer.toLowerCase().trim();
            } else {
              isCorrect = answers[q.id] === q.answer;
            }
            return (
              <div key={q.id} className={`question-card ${isCorrect ? 'correct' : 'incorrect'}`}>
                <h3>Pregunta {i+1}</h3>
                <div className="status-badge">
                  {isCorrect ? '✓ Correcto' : '✗ Incorrecto'}
                </div>
                <div className="question-content">
                  <p className="question-text">{q.text}</p>
                  {q.code && (
                    <pre className="code-block">
                      <code>{q.code}</code>
                    </pre>
                  )}
                  <div className="answer-section">
                    <p><strong>Tu respuesta:</strong> {answers[q.id] || 'No respondida'}</p>
                    {!isCorrect && (
                      <>
                        <p><strong>Respuesta correcta:</strong> {q.answer}</p>
                        <p className="explanation"><strong>Explicación:</strong> {q.explanation}</p>
                        {q.tutorialLink && (
                          <a 
                            href={q.tutorialLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="tutorial-button"
                          >
                            📚 Estudiar este tema en W3Schools
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem' }}>
        <button
          className="nav-button submit-button finalizar-btn"
          onClick={() => router.push('/exam-selection')}
        >
          <span style={{fontSize: '1.3em', marginRight: '0.5em'}}></span> Finalizar intento
        </button>
      </div>
      <style jsx>{`
        .question-card {
          background: white;
          border-radius: 8px;
          padding: 1.5rem;
          margin: 1rem 0;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          border-left: 4px solid;
        }
        .question-card.correct {
          border-left-color: #28a745;
        }
        .question-card.incorrect {
          border-left-color: #dc3545;
        }
        .tutorial-button {
          display: inline-block;
          background-color: #e7f1ff;
          color: #0066cc;
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
          text-decoration: none;
          margin-top: 1rem;
          transition: all 0.2s ease;
        }
        .tutorial-button:hover {
          background-color: #cce5ff;
          transform: translateY(-1px);
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .code-block {
          background: #f8f9fa;
          padding: 1rem;
          border-radius: 4px;
          margin: 1rem 0;
          overflow-x: auto;
        }
        .explanation {
          margin: 1rem 0;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 4px;
          border-left: 3px solid #6c757d;
        }
        .finalizar-btn {
          background: linear-gradient(90deg, #4a26ab 0%, #00b4d8 100%);
          color: #fff;
          border: none;
          border-radius: 12px;
          padding: 1rem 2.5rem;
          font-size: 1.15rem;
          font-weight: 700;
          box-shadow: 0 4px 16px rgba(74,38,171,0.10);
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          margin-bottom: 2.5rem;
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
        }
        .finalizar-btn:hover {
          background: linear-gradient(90deg, #6c3ce4 0%, #0096c7 100%);
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 6px 24px rgba(74,38,171,0.16);
        }
      `}</style>
    </div>
  );
}
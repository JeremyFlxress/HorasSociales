'use client';

export const dynamic = 'force-dynamic';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';
import { questions, examConfig } from '../../data/questionsPy1';
import '../styles/results.css';

// Componente principal envuelto en Suspense
export default function ResultsPageWrapper() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <ResultsPageContent />
    </Suspense>
  );
}

// Pantalla de carga reutilizable
function LoadingScreen() {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p className="loading-text">Cargando resultados...</p>
    </div>
  );
}

// Componente de contenido principal
function ResultsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Verificar si searchParams está disponible
  if (!searchParams) {
    return <LoadingScreen />;
  }

  // Obtener parámetros
  const scoreParam = searchParams.get('score');
  const answersParam = searchParams.get('answers');

  // Redirigir si faltan parámetros
  useEffect(() => {
    if (!scoreParam || !answersParam) {
      router.push('../../exams/examPy1');
    }
  }, [scoreParam, answersParam, router]);

  if (!scoreParam || !answersParam) {
    return <LoadingScreen text="Redirigiendo..." />;
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

        <div className="action-buttons">
          <button 
            onClick={() => router.push('../../exams/examPy1')}
            className="retry-button"
          >
            Volver a intentar
          </button>
        </div>
      </div>
    </div>
  );
}
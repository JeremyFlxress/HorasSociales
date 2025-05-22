'use client';

// Esto desactiva completamente el prerenderizado estático
export const dynamic = 'force-dynamic';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { questions, examConfig } from '../data/questions';

export default function ResultsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Obtener parámetros
  const scoreParam = searchParams.get('score');
  const answersParam = searchParams.get('answers');

  // Redirigir si faltan parámetros
  useEffect(() => {
    if (!scoreParam || !answersParam) {
      router.push('/exam');
    }
  }, [scoreParam, answersParam, router]);

  if (!scoreParam || !answersParam) {
    return <div>Redirigiendo...</div>;
  }

  // Procesar resultados
  const score = parseInt(scoreParam);
  const answers = JSON.parse(decodeURIComponent(answersParam));
  const passed = score >= examConfig.passingScore;

  return (
    <div className="results-page">
      <h1>Resultados del Examen</h1>
      <div className={`result-card ${passed ? 'passed' : 'failed'}`}>
        <h2>Puntuación: {score}/{examConfig.totalPoints}</h2>
        <p>{passed ? '✅ Aprobado' : '❌ Reprobado'}</p>
      </div>

      <div className="questions-review">
        {questions.map((q, i) => {
          const isCorrect = answers[q.id] === q.answer;
          return (
            <div key={q.id} className={`question ${isCorrect ? 'correct' : 'incorrect'}`}>
              <h3>Pregunta {i+1}: {isCorrect ? '✓' : '✗'}</h3>
              <p>{q.text}</p>
              {q.code && <pre><code>{q.code}</code></pre>}
              <p><strong>Tu respuesta:</strong> {answers[q.id] || 'No respondida'}</p>
              {!isCorrect && (
                <>
                  <p><strong>Respuesta correcta:</strong> {q.answer}</p>
                  <p><strong>Explicación:</strong> {q.explanation}</p>
                  <p className="tutorial-link">
                    <a href={q.tutorialLink} target="_blank" rel="noopener noreferrer">
                      📚 Click aquí para estudiar este tema en W3Schools
                    </a>
                  </p>
                </>
              )}
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .results-page {
          padding: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }
        .result-card {
          padding: 2rem;
          border-radius: 8px;
          margin: 2rem 0;
          text-align: center;
        }
        .passed {
          background-color: #d4edda;
          color: #155724;
        }
        .failed {
          background-color: #f8d7da;
          color: #721c24;
        }
        .questions-review {
          margin-top: 2rem;
        }
        .question {
          padding: 1.5rem;
          margin: 1rem 0;
          border-radius: 8px;
          background-color: #f8f9fa;
        }
        .correct {
          border-left: 5px solid #28a745;
        }
        .incorrect {
          border-left: 5px solid #dc3545;
        }
        .tutorial-link {
          margin-top: 1rem;
        }
        .tutorial-link a {
          color: #0066cc;
          text-decoration: none;
          padding: 0.5rem 1rem;
          background-color: #e7f1ff;
          border-radius: 4px;
          display: inline-block;
        }
        .tutorial-link a:hover {
          background-color: #cce5ff;
          text-decoration: underline;
        }
        pre {
          background-color: #f1f1f1;
          padding: 1rem;
          border-radius: 4px;
          overflow-x: auto;
        }
      `}</style>
    </div>
  );
}
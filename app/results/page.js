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
              {!isCorrect && <p><strong>Correcta:</strong> {q.answer}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
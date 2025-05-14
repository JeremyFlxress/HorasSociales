'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { calculateScore } from '../../utils/scoring';
import ExamContainer from '../../components/exam/ExamContainer';
import Timer from '../../components/exam/Timer';
import { questions, examConfig } from '../../data/questions2';
import { saveExamProgress, loadExamProgress } from '../../utils/storage';
import '../styles/exam.css';

export default function ExamPage() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(examConfig.timeLimit);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false); // Nuevo estado para controlar envío

  useEffect(() => {
    // Load saved progress from localStorage
    const savedProgress = loadExamProgress();
    if (savedProgress) {
      setAnswers(savedProgress.answers);
      setCurrentQuestionIndex(savedProgress.currentQuestionIndex);
      setTimeLeft(savedProgress.timeLeft);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading && !isSubmitting) {
      saveExamProgress({
        answers,
        currentQuestionIndex,
        timeLeft
      });
    }
  }, [answers, currentQuestionIndex, timeLeft, isLoading, isSubmitting]);

  const handleNavigate = (direction) => {
    if (direction === 'prev' && currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (direction === 'next' && currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleTimeUp = () => {
    finishExam(answers);
  };

  const finishExam = async (finalAnswers) => {
    if (isSubmitting) return; // Evitar múltiples envíos
    
    setIsSubmitting(true); // Bloquear nuevos intentos
    
    try {
      const score = calculateScore(questions, finalAnswers);
      const params = new URLSearchParams();
      params.set('score', score);
      params.set('answers', JSON.stringify(finalAnswers));
      
      // Limpiar el progreso guardado
      saveExamProgress(null);
      
      // Dos métodos alternativos para asegurar la navegación
      try {
        router.push(`../result/results2?${params.toString()}`);
      } catch (e) {
        window.location.href = `../result/results2?${params.toString()}`;
      }
    } catch (error) {
      console.error('Error al finalizar el examen:', error);
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <div>Loading exam...</div>;
  }

  return (
    <div className="exam-page">
      <Timer initialTime={timeLeft} onTimeUp={handleTimeUp} />
      <ExamContainer
        question={questions[currentQuestionIndex]}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={questions.length}
        onAnswer={handleAnswer}
        selectedAnswer={answers[questions[currentQuestionIndex].id] || ''}
        onNavigate={handleNavigate}
        isFirstQuestion={currentQuestionIndex === 0}
        isLastQuestion={currentQuestionIndex === questions.length - 1}
        onFinish={() => finishExam(answers)}
      />
    </div>
  );
}
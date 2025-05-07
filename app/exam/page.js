'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { calculateScore } from '../utils/scoring';
import ExamContainer from '../components/exam/ExamContainer';
import Timer from '../components/exam/Timer';
import { questions, examConfig } from '../data/questions';
import { saveExamProgress, loadExamProgress } from '../utils/storage';
import '../styles/exam.css'; // Importación de estilos correcta

export default function ExamPage() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(examConfig.timeLimit);
  const [isLoading, setIsLoading] = useState(true);

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
    if (!isLoading) {
      saveExamProgress({
        answers,
        currentQuestionIndex,
        timeLeft
      });
    }
  }, [answers, currentQuestionIndex, timeLeft, isLoading]);

  const handleAnswer = (questionId, answer) => {
    const newAnswers = { ...answers, [questionId]: answer };
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      finishExam(newAnswers);
    }
  };

  const handleTimeUp = () => {
    finishExam(answers);
  };

  // CORRECCIÓN PRINCIPAL: Cambiar la sintaxis de router.push
  const finishExam = (finalAnswers) => {
    const score = calculateScore(questions, finalAnswers);
    
    // Codificación CORRECTA de parámetros
    const params = new URLSearchParams();
    params.set('score', score);
    params.set('answers', JSON.stringify(finalAnswers));
    
    // Usar window.location para evitar problemas de routing
    window.location.href = `/results?${params.toString()}`;
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
        selectedAnswer={answers[questions[currentQuestionIndex].id]}
      />
    </div>
  );
}
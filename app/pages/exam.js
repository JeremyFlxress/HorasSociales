'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ExamContainer from '../components/exam/ExamContainer';
import Timer from '../components/exam/Timer';
import { questions, examConfig } from '../data/questions';
import { saveExamProgress, loadExamProgress } from '../utils/storage';

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

  const finishExam = (finalAnswers) => {
    const score = questions.reduce((total, question) => {
      return finalAnswers[question.id] === question.answer 
        ? total + question.points 
        : total;
    }, 0);
    
    saveExamProgress(null); // Clear saved progress
    
    router.push(`/results?score=${score}&answers=${encodeURIComponent(JSON.stringify(finalAnswers))}`);
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
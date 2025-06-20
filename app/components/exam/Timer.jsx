import { useEffect, useState } from 'react';

export default function Timer({ initialTime, onTimeUp }) {
  // Persist timer in localStorage for reload-proof countdown
  const STORAGE_KEY = 'jsCertExamTimer';
  const [timeLeft, setTimeLeft] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved !== null && !isNaN(Number(saved))) {
      return Number(saved);
    }
    localStorage.setItem(STORAGE_KEY, initialTime);
    return initialTime;
  });

  useEffect(() => {
    if (timeLeft <= 0) {
      localStorage.removeItem(STORAGE_KEY);
      onTimeUp();
      return;
    }
    localStorage.setItem(STORAGE_KEY, timeLeft);
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, onTimeUp]);

  // Limpia el timer del storage al desmontar (opcional, por seguridad)
  useEffect(() => {
    return () => {
      localStorage.removeItem(STORAGE_KEY);
    };
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="timer">
      <span>Time Remaining: {formatTime(timeLeft)}</span>
    </div>
  );
}
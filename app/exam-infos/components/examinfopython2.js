"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Reemplazo de useNavigate()
import "../styles/examinfo.css"; // Importación de estilos correcta

const ExamInfo = () => {
    const router = useRouter(); // Hook de navegación en Next.js

    const handleStartExam = () => {
        router.push("../../exams/examPy2");// Redireccionamiento a la página de examen
    };

    return (
        <div className="exam-info-page">
            <div className="info-panel">
                <div className="exam-details">
                    <h2>Welcome!</h2>
                    <p className="exam-title">Python</p>
                    <p>Maximum exam time: <strong>40 minutes</strong></p>
                    <p>Number of exam questions: <strong>40</strong></p>
                    <p>Minimum score required to pass exam: <strong>800</strong></p>
                </div>
                <button className="start-exam-button" onClick={handleStartExam}>Start Exam</button>
            </div>

            <div className="image-panel">
                <img src="/start.jpg" alt="Person preparing for exam" className="exam-image" />
            </div>
        </div>
    );
};

export default ExamInfo;
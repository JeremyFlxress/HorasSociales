"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Reemplazo de useNavigate()
import "../styles/examrequirements.css"; // Importación de estilos correcta

const ExamRequirements = () => {
    const router = useRouter(); // Hook de navegación en Next.js

    const handlePrevious = () => {
        router.push("../../proctors/proctor-authPy2"); 
    };

    const handleNext = () => {
        router.push("../../exam-infos/exam-infoPy2"); 
    };

    return (
        <div className="exam-requirements-page">
            <header className="header">
                <img src="/certiport.png" alt="Certiport Logo" className="logo" />
            </header>

            <main className="content">
                <h2>Python</h2>
                <ul className="requirements-list">
                    <li><span className="checkmark">✔️</span> User Admin</li>
                    <li><span className="checkmark">✔️</span> Hardware Requirements</li>
                    <li><span className="checkmark">✔️</span> Printer Driver</li>
                    <li><span className="checkmark">✔️</span> Running Processes</li>
                    <li><span className="checkmark">✔️</span> Exam Up to Date</li>
                </ul>

                <div className="buttons">
                    <button className="button previous" onClick={handlePrevious}>Previous</button>
                    <button className="button next" onClick={handleNext}>Next</button>
                </div>
            </main>

            <footer className="footer">
                <p>Copyright © 1996-2024 Pearson Education Inc. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ExamRequirements;

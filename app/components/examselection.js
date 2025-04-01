"use client"; 
import React from "react";
import { useRouter } from "next/navigation"; // Reemplazo de useNavigate()
import "../styles/examselection.css"; // Ruta correcta para Next.js

const ExamSelection = () => {
    const router = useRouter();

    const handleJavascript = () => {
        router.push("../agreement-page"); 
    };

    const handlePython = () => {
        router.push("/agreement-page2");
    };

    return (
        <div className="exam-selection-page">
            <header className="exam-selection-header">
                <img src="/certiport.png" alt="Certiport Logo" className="logo" />
            </header>
            <div className="exam-selection-content">
                <h2>Choose Your Exam</h2>
                <table className="exam-table">
                    <tbody>
                        <tr>
                            <td>Information Technology Specialist</td>
                            <td><a onClick={handleJavascript} className="exam-link">JavaScript</a></td>
                        </tr>
                        <tr>
                            <td>Information Technology Specialist</td>      
                            <td><a onClick={handlePython} className="exam-link">Python</a></td>
                        </tr>
                    </tbody>                        
                </table>
            </div>
            <footer className="footer">
                © 1996-2024 Pearson Education Inc. All rights reserved.
            </footer>
        </div>
    );
};

export default ExamSelection;
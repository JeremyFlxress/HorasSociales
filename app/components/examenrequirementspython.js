import React from 'react';
import './examrequirements.css';
import { useNavigate } from 'react-router-dom';

const ExamRequirements = () => {
    const navigate = useNavigate();

    const handlePrevious = () => {
        navigate('/proctor-auth2'); // Ajustar esta ruta según sea necesario
    };

    const handleNext = () => {
        navigate('/examinfo2'); 
    };

    return (
        <div className="exam-requirements-page">
            <header className="header">
                <img src="certiport.png" alt="Certiport Logo" className="logo" />
              
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
                <p>Copyright © 1996-2024 Pearson Education Inc. or its affiliates. All rights reserved.</p>
                <div className="footer-links">
                    <a href="/terms">Terms</a>
                    <a href="/privacy">Privacy</a>
                    <a href="/contact">Contact</a>
                </div>
            </footer>
        </div>
    );
};

export default ExamRequirements;

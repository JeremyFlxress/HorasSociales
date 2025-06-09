"use client"; 
import React from "react";
import { useRouter } from "next/navigation"; // Reemplazo de useNavigate()
import "../styles/nextfromlogin.css"; // Ruta correcta para Next.js

const NextFromLogin = () => { 
    const router = useRouter(); // Hook de navegación en Next.js

    const handleLogin = () => {
        router.push("../exam-selection"); // Navegación en Next.js
    };

    return (
        <div className="exam-setup-page">
            <header className="exam-setup-header">
                <img src="/certiport.png" alt="Certiport Logo" className="logo" />
            </header>

            <div className="exam-setup-content">
                <h2>Let's get you ready for your exam!</h2>
                <div className="question-section">
                    <div className="question-card">
                        <h3>Do you have an Exam Group ID today?</h3>
                        <p>Please make a selection below and then click "Next" to continue.</p>
                        <p>Your Teacher or Proctor would have given you a special code or series of numbers.</p>
                        <p>Example Exam Group ID: xxxxx</p>
                        <div className="toggle-switch">
                            <input type="checkbox" id="examGroupId" />
                            <label htmlFor="examGroupId">No</label>
                        </div>
                    </div>

                    <div className="question-card">
                        <h3>Do you have a Voucher to use for payment today?</h3>
                        <p>Please make a selection below and then click "Next" to continue.</p>
                        <p>Your Teacher or Proctor would have given you a series of numbers.</p>
                        <p>Example Voucher: xxxx-xxxx-xxxx-xxxx</p>
                        <div className="toggle-switch">
                            <input type="checkbox" id="voucher" />
                            <label htmlFor="voucher">No</label>
                        </div>
                    </div>
                </div>
                <button className="next-button" onClick={handleLogin}>Next</button>
            </div>

            <footer className="footer">
                Copyright 1996-2024 Pearson Education Inc. or its affiliate(s). All rights reserved.
            </footer>
        </div>
    );
};

export default NextFromLogin;

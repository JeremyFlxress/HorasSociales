"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Reemplazo de useNavigate()
import "../styles/proctorauth.css"; // Importación de estilos correcta

const ProctorAuth = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter(); // Hook de navegación en Next.js

    const validProctor = { 
        username: "dany_mancia@yahoo.com", 
        password: "Raices29" 
    };

    const handlePrevious = () => {
        router.push("../../agreements/agreement-pagePy1"); 
    };

    const handleNext = () => {
        if (username === validProctor.username && password === validProctor.password) {
            router.push("../../exam-requirement/exam-requirementsPy1"); 
        } else {
            setError("Invalid proctor username or password"); 
        }
    };

    return (
        <div className="proctor-auth-page">
            <header className="header">
                <img src="/certiport.png" alt="Certiport Logo" className="logo" />
            </header>
            
            <main className="content">
               
                <p className="notification">⚠️ Candidate, please notify the proctor that you are ready to proceed.</p>
                
                <div className="proctor-auth-section">
                    <h3>Proctor Authentication</h3>
                    <p className="required-fields">All fields are required.</p>
                    
                    <label htmlFor="username">Proctor Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        placeholder="Enter proctor username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    
                    <label htmlFor="password">Proctor Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Enter proctor password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {error && <p className="error-message">{error}</p>}

                    <div className="buttons">
                        <button className="button previous" onClick={handlePrevious}>Previous</button>
                        <button className="button unlock" onClick={handleNext}>Unlock Exam</button>
                    </div>
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

export default ProctorAuth;

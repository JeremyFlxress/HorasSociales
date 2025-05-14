"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Reemplazo de useNavigate()
import "../styles/terminosdeuso.css"; // Ruta correcta para estilos

const Agreement = () => {
    const [accepted, setAccepted] = useState(false);
    const router = useRouter(); // Hook de navegación en Next.js

    const handleAcceptChange = (event) => {
        setAccepted(event.target.value === "yes");
    };

    const handleNext = () => {
        if (accepted) {
            router.push("../../proctors/proctor-auth2"); 
        } else {
            alert("Debe aceptar los términos para continuar :).");
        }
    };

    const handlePrevious = () => {
        router.push("../exam-selection"); 
    };

    return (
        <div className="agreement-page">
            <header className="header">
                <img src="/certiport.png" alt="Certiport Logo" className="logo" />
            </header>
            
            <main className="content">
                <h1>Non-Disclosure Agreement and Terms of Use</h1>
                <div className="agreement-text">
                    <p><strong>NON-DISCLOSURE AGREEMENT AND GENERAL TERMS OF USE FOR THE CERTIFICATION EXAMINATIONS</strong></p>
                    <p><strong>Non-Disclosure:</strong> The content of Certiport certification examinations is confidential and is protected by trade secret law and other applicable law...</p>
                    <p><strong>Privacy and cookies policy:</strong> Certiport collects personally identifiable information during registration...</p>
                    <p><strong>Disclaimer:</strong> You agree and acknowledge that earning this certification does not guarantee employment or eligibility for specific jobs...</p>
                    <p>To take any exam you must accept this Non-Disclosure Agreement and Terms of Use.</p>
                </div>

                <div className="accept-options">
                    <label>
                        <input
                            type="radio"
                            name="accept"
                            value="yes"
                            checked={accepted}
                            onChange={handleAcceptChange}
                        />
                        Yes, I accept
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="accept"
                            value="no"
                            checked={!accepted}
                            onChange={handleAcceptChange}
                        />
                        No, I don't accept
                    </label>
                </div>

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

export default Agreement;

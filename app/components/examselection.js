"use client"; 
import React from "react";
import { useRouter } from "next/navigation"; // Reemplazo de useNavigate()
import "../styles/examselection.css"; // Ruta correcta para Next.js

const ExamSelection = () => {
    const router = useRouter();

    const handleJavascript = (e) => {
        const valor = e.currentTarget.dataset.valor;

        if(valor === "test1"){
            router.push("/agreements/agreement-page1"); // Cambia la ruta según tu estructura de carpetas
        } 
        if(valor === "test2"){
            router.push("/agreements/agreement-page2"); // Cambia la ruta según tu estructura de carpetas
        }
    };

    const handlePython = (e) => {
        const valor = e.currentTarget.dataset.valor;

        if(valor === "test1"){
            router.push("/agreements/agreement-pagePy1"); // Cambia la ruta según tu estructura de carpetas
        } 
        if(valor === "test2"){
            router.push("/agreements/agreement-pagePy2"); // Cambia la ruta según tu estructura de carpetas
        }
    };

    //aca deberias de agregar las dos paginas faltantes de los examenes de js y py 2

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
                            <td><a onClick={handleJavascript} data-valor="test1" className="exam-link">JavaScript Test 1</a></td>
                        </tr>
                        <tr>
                            <td>Information Technology Specialist</td>      
                            <td><a onClick={handleJavascript} data-valor="test2" className="exam-link">JavaScript Test 2</a></td> 
                        </tr>
                        <tr>
                            <td>Information Technology Specialist</td>      
                            <td><a onClick={handlePython} data-valor="test1" className="exam-link">Python Test 1</a></td>
                        </tr>
                      
                        <tr>
                            <td>Information Technology Specialist</td>      
                            <td><a onClick={handlePython} data-valor="test2" className="exam-link">Python Test</a></td>
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
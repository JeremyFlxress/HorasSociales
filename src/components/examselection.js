import React from 'react';
import './examselection.css'; 
import { useNavigate } from 'react-router-dom';

const ExamSelection = () => {
    const navigate = useNavigate();

    const handleJavascript = () => {
        navigate('/agreement-page'); 
    };

    const handlePython = () => {
        navigate('/agreement-page2');
    };


    return (
        <div className="exam-selection-page">
            <header className="exam-selection-header">
                <img src="certiport.png" alt="Certiport Logo" className="logo" />
            </header>
            <div className="exam-selection-content">
                <h2>Choose Your Exam</h2>
                <table className="exam-table">
                    <tbody>
                        <tr>
                            <td>Information Technology Specialist</td>
                            <td><a onClick={handleJavascript}>JavaScript</a></td>
                        </tr>
                        <tr>
                            <td>Information Technology Specialist</td>      
                            <td><a onClick={handlePython}>Python</a></td>
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

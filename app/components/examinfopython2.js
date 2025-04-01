import React from 'react';
import './examinfo.css';
import { useNavigate } from 'react-router-dom';

const ExamInfo = () => {
    const navigate = useNavigate();

    const handleStartExam = () => {
        navigate('/surveypython'); 
    };

    return (
        <div className="exam-info-page">
            <div className="info-panel">
               

                <div className="exam-details">
                    <h2>Welcome!</h2>
                    <p className="exam-title">Python</p> 
                    <p>Maximum exam time: <strong>50 minutes</strong></p>
                    <p>Number of exam questions: <strong>35</strong></p>
                    <p>Minimum score required to pass exam: <strong>700</strong></p>
                </div>

                <button className="start-exam-button" onClick={handleStartExam}>Start Exam</button>
            </div>

            <div className="image-panel">
                <img src="start.jpg" alt="Person preparing for exam" className="exam-image" />
            </div>
        </div>
    );
};

export default ExamInfo;

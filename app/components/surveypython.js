import React, { useState } from 'react';
import './surveypagepython.css';
import { useNavigate } from 'react-router-dom'; // Add this 


const SurveyPage = () => {
    const [selectedOptions, setSelectedOptions] = useState({});
    const navigate = useNavigate(); // Move this inside the main component

    const handleOptionClick = (section, option) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [section]: option,
        }));
    };

    const handleNext = () => {
        navigate('/tutorialpython');
    };

    const sections = [
        {
            title: "Select the statement that best describes the courses you have taken that cover Python.",
            options: [
                "I have not taken a course that covers Python.",
                "I am beginning my first course that covers Python.",
                "I have completed or nearly completed my first course that covers Python.",
                "I have completed multiple courses that cover Python."
            ]
        },
        {
            title: "Select all types of resources you used to prepare for the exam.",
            options: [
                "Online learning or video",
                "Instructor-led learning",
                "Hands-on practice or labs",
                "Practice tests"
            ]
        },
    ];

    return (
        <div className="survey-container">
            <div className="header1">Survey 1 of 1</div>
            <div className="instructions">Please tell us about your experience with Python by answering the questions in the answer area. Your answers will not affect the exam questions or your score.</div>

            <div className="answer-area">
                {sections.map((section, index) => (
                    <div key={index} className="section">
                        <div className="section-title">{section.title}</div>
                        <div className="option-group">
                            {section.options.map((option, i) => (
                                <div
                                    key={i}
                                    className={`option ${selectedOptions[index] === option ? 'selected' : ''}`}
                                    onClick={() => handleOptionClick(index, option)}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <button className="next-button" onClick={handleNext}>Next</button>
        </div>
    );
};

export default SurveyPage;
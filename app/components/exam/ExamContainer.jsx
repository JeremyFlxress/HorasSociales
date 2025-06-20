'use client';
import { useState, useEffect } from 'react';
import '../../exams/styles/exam.css';

export default function ExamContainer({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  selectedAnswer,
  onNavigate,
  isFirstQuestion,
  isLastQuestion,
  onFinish // Añadimos esta prop
}) {
  const [currentSelection, setCurrentSelection] = useState(selectedAnswer || '');
  const [showAlertModal, setShowAlertModal] = useState(false);

  // Sincronizar la selección cuando cambia la pregunta
  useEffect(() => {
    setCurrentSelection(selectedAnswer || '');
  }, [question.id, selectedAnswer]);

  const handleSubmit = () => {
    if (!currentSelection) {
      setShowAlertModal(true);
      return;
    }
    // Guardar la respuesta actual
    onAnswer(question.id, currentSelection);
    // Llamar a la función de finalización
    onFinish();
  };

  const handlePrevious = () => {
    // Guardar la respuesta actual si existe
    if (currentSelection) {
      onAnswer(question.id, currentSelection);
    }
    // Navegar a pregunta anterior
    onNavigate('prev');
  };

  const handleNext = () => {
    if (!currentSelection) {
      setShowAlertModal(true);
      return;
    }
    // Guardar la respuesta actual
    onAnswer(question.id, currentSelection);
    // Navegar a siguiente pregunta
    onNavigate('next');
  };

  return (
    <div className="question-container">
      {/* Modal de alerta personalizado */}
      {showAlertModal && (
        <div className="custom-alert-modal">
          <div className="custom-alert-content">
            <h4>¡Atención!</h4>
            <p>Por favor selecciona o escribe una respuesta antes de continuar.</p>
            <button className="custom-alert-btn" onClick={() => setShowAlertModal(false)}>
              Entendido
            </button>
          </div>
        </div>
      )}
      <h3>Pregunta {questionNumber} de {totalQuestions}</h3>
      
      <div className="question-text">{question.text}</div>
      
      {question.code && (
        <pre className="question-code">
          <code>{question.code}</code>
        </pre>
      )}

      {/* Renderizar opciones según el tipo de pregunta */}
      {question.type === 'multiple-choice' && (
        <div className="options">
          {question.options.map((option, index) => (
            <div 
              key={index}
              className={`option ${currentSelection === option[0] ? 'selected' : ''}`}
              onClick={() => setCurrentSelection(option[0])}
            >
              {option}
            </div>
          ))}
        </div>
      )}

      {question.type === 'fill-blank' && (
        <div className="fill-blank">
          <input
            type="text"
            value={currentSelection || ''}
            onChange={(e) => setCurrentSelection(e.target.value)}
            placeholder="Escribe tu respuesta aquí"
            className="fill-blank-input"
            autoComplete="off"
          />
        </div>
      )}

      <div className="navigation-buttons">
        {!isFirstQuestion && (
          <button onClick={handlePrevious} className="nav-button prev-button">
            Anterior
          </button>
        )}
        
        {!isLastQuestion ? (
          <button onClick={handleNext} className="nav-button next-button">
            Siguiente
          </button>
        ) : (
          <button onClick={handleSubmit} className="nav-button submit-button">
            Finalizar Examen
          </button>
        )}
      </div>
    </div>
  );
}
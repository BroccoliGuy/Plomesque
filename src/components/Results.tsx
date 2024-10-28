import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Results.css';

interface Question {
  img: string;
  correctAnswer: string;
  options: string[];
  userAnswers?: string; // Assurez-vous que cette propriété est optionnelle
}

const Results: React.FC = () => {
  const location = useLocation();
  const { score = 0, questions = [] } = location.state || {}; // Valeurs par défaut

  return (
    <div className="results-container">
      <div className="score">Score: {score} / {questions.length}</div>
      <button className="restart-button" onClick={() => window.location.href = '/'}>Recommencer</button>
      <h2>Résultats du Quiz</h2>
      <div className="answers-container">
        {questions && questions.map((question: Question, index: number) => (
          <div key={index} className="question-container">
            {/* Nouveau header avec numéro de question et nom du thème */}
            <img src={question.img} alt={`Question ${index + 1}`} />
            <div className="options-grid">
              {question.options.map((option, idx) => {
                const isCorrect = option === question.correctAnswer;
                const isSelected = question.userAnswers && question.userAnswers.includes(option); // Vérifiez que userAnswers n'est pas undefined
                const showCorrectInOrange = !isSelected && isCorrect; // Affiche en orange si non sélectionné et est la bonne réponse

                return (
                  <div
                    key={idx}
                    className={`option ${isSelected ? (isCorrect ? 'correct' : 'incorrect') : ''} ${showCorrectInOrange ? 'show-correct' : ''}`}
                  >
                    {option}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;

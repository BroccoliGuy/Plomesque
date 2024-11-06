import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Results.css';

interface Question {
  img: string;
  correctAnswer: string;
  options: string[];
  userAnswers?: string;
}

const Results: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score = 0, questions = [] } = location.state || {};

  return (
    <div className="results-container">
      <div className="score">Score: {score} / {questions.length}</div>
      <button className="restart-button" onClick={() => navigate('/home')}>Recommencer</button>
      <h2>Résultats du Quiz</h2>
      <div className="answers-container">
        {questions && questions.map((question: Question, index: number) => (
          <div key={index} className="question-container">
            <img src={question.img} alt={`Question ${index + 1}`} />
            <div className="options-grid">
              {question.options.map((option, idx) => {
                const isCorrect = option === question.correctAnswer;
                const isSelected = question.userAnswers && question.userAnswers.includes(option);
                const showCorrectInOrange = !isSelected && isCorrect;

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
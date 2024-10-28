import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import allThemes from '../themes';
import '../styles/Quiz.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHome } from '@fortawesome/free-solid-svg-icons';

interface QuizProps {
  selectedThemes: string[];
  questionCount: number;
  mode: string | null;
  customQuestionCount?: number;
  customTimerDuration?: number;
  customLives?: number;
}

interface Question {
  img: string;
  correctAnswer: string;
  options: string[];
  userAnswers: string[];
  themeName: string;
}

const Quiz: React.FC<QuizProps> = ({ selectedThemes, questionCount, mode, customQuestionCount, customTimerDuration, customLives }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [lives, setLives] = useState<number>(mode === 'survival' ? 1 : customLives || 3);
  const [timer, setTimer] = useState<number | null>(null);
  const navigate = useNavigate();
  const scoreRef = useRef(0);
  const [shouldNavigate, setShouldNavigate] = useState<{ score: number; questions: Question[] } | null>(null);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);

  const totalQuestions = mode === 'custom' && customQuestionCount 
    ? customQuestionCount 
    : (mode === 'timer' || mode === 'survival' ? Infinity : questionCount);

  const generateQuestions = useCallback(() => {
    const generatedQuestions: Question[] = [];
    const usedImages: Set<string> = new Set();
    
    selectedThemes.forEach(theme => {
      const themeData = allThemes[theme];
      const themeQuestions = Object.entries(themeData)
        .filter(([name]) => name !== 'cover')
        .map(([name, img]) => ({
          name,
          img,
          themeName: theme
        }));
    
      themeQuestions.forEach(({ name, img, themeName }) => {
        const uniqueImg = `${themeName}-${img}`;
    
        if (!usedImages.has(uniqueImg)) {
          const correctAnswer = name;
          const wrongAnswers = Object.keys(themeData)
            .filter(country => country !== correctAnswer && country !== 'cover')
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);
          const options = [correctAnswer, ...wrongAnswers].sort(() => 0.5 - Math.random());
    
          generatedQuestions.push({
            img,
            correctAnswer,
            options,
            userAnswers: [],
            themeName,
          });
    
          usedImages.add(uniqueImg);
        }
      });
    });
    
    console.log("Liste complète des images :", Array.from(usedImages));
    
    return generatedQuestions.sort(() => 0.5 - Math.random()).slice(0, totalQuestions);
  }, [selectedThemes, totalQuestions]);
    
  useEffect(() => {
    const quizQuestions = generateQuestions();
    setQuestions(quizQuestions);
  }, [generateQuestions]);

  useEffect(() => {
    if (mode === 'timer' || (mode === 'custom' && customTimerDuration)) {
      const initialTimer = customTimerDuration || 60;
      setTimer(initialTimer);

      const countdown = setInterval(() => {
        setTimer(prev => {
          if (prev === 1) {
            clearInterval(countdown);
            setShouldNavigate({ score: scoreRef.current, questions: questions.filter(q => q.userAnswers.length > 0) });
            return 0;
          }
          return prev ? prev - 1 : 0;
        });
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [mode, customTimerDuration, questions]);

  const handleAnswer = (answer: string) => {
    const isCorrect = answer === questions[currentQuestion].correctAnswer;
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestion].userAnswers.push(answer);
    
    if (isCorrect) {
      scoreRef.current += 1;
    } else {
      if (mode === 'survival' || (mode === 'custom' && customLives)) {
        setLives(prevLives => prevLives - 1);
      }
    }
  
    if ((mode === 'survival' || (mode === 'custom' && customLives)) && lives <= 1 && !isCorrect) {
      setShouldNavigate({ score: scoreRef.current, questions: updatedQuestions.filter(q => q.userAnswers.length > 0) });
    } else if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShouldNavigate({ score: scoreRef.current, questions: updatedQuestions.filter(q => q.userAnswers.length > 0) });
    }
  };

  const confirmExit = () => setShowConfirmPopup(true);

  const handleExit = () => {
    navigate('/');
  };

  useEffect(() => {
    if (shouldNavigate) {
      navigate('/results', { state: { score: shouldNavigate.score, total: questions.length, questions: shouldNavigate.questions } });
      setShouldNavigate(null);
    }
  }, [shouldNavigate, navigate, questions.length]);

  if (questions.length === 0) {
    return <div>Chargement...</div>;
  }

  const { img, options } = questions[currentQuestion];

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h2>Q.{currentQuestion + 1}{totalQuestions !== Infinity ? ' / ' + totalQuestions : ''}</h2>
        <h3 className="theme-name">{questions[currentQuestion].themeName}</h3>
        {(mode === 'timer' || (mode === 'custom' && customTimerDuration)) && timer !== null && (
          <h3 className="timer">{timer}</h3>
        )}
        {(mode === 'survival' || (mode === 'custom' && customLives)) && (
          <div className="lives">
            {Array.from({ length: lives }).map((_, index) => (
              <FontAwesomeIcon key={index} icon={faHeart} className="heart-icon" />
            ))}
          </div>
        )}
        <FontAwesomeIcon icon={faHome} className="home-icon" onClick={confirmExit} />
      </div>
      <img src={img} alt="Question" />
      <div className="options-container">
        {options.map(option => (
          <button key={option} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
      {showConfirmPopup && (
        <div className="popup">
          <p>Voulez-vous vraiment quitter la partie ?</p>
          <button onClick={() => setShowConfirmPopup(false)}>Annuler</button>
          <button onClick={handleExit}>Oui</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;

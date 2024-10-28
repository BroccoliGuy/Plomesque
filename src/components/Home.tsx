import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import allThemes from '../themes'; // Importer tous les thèmes
import '../styles/Home.css';

interface HomeProps {
  handleThemeChange: (themes: string[]) => void;
  handleModeChange: (mode: string, customCount?: number, customTimer?: number, customLives?: number) => void;
  handleStartQuiz: () => void;
}

const Home: React.FC<HomeProps> = ({ handleThemeChange, handleModeChange, handleStartQuiz }) => {
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  const [customQuestionCount, setCustomQuestionCount] = useState<number>(5);
  const [customTimerDuration, setCustomTimerDuration] = useState<number>(20);
  const [customLives, setCustomLives] = useState<number>(3);
  const [customMode, setCustomMode] = useState<'questions' | 'timer' | 'survival'>('questions');
  const [showCustomOptions, setShowCustomOptions] = useState(false); // État pour contrôler l'affichage des options personnalisées
  const navigate = useNavigate();

  const themes = Object.entries(allThemes).map(([value, data]) => ({
    name: value.charAt(0).toUpperCase() + value.slice(1).replace('-', ' '),
    value,
    data,
  }));

  const modes = [
    { id: '10', label: '10 Questions', value: '10-questions' },
    { id: '20', label: '20 Questions', value: '20-questions' },
    { id: '60', label: '60 Secondes', value: 'timer' },
    { id: 'survival', label: 'Survie', value: 'survival' },
    { id: 'custom', label: 'Custom', value: 'custom' }
  ];

  const handleThemeSelection = (theme: string) => {
    setSelectedThemes(prevSelected =>
      prevSelected.includes(theme)
        ? prevSelected.filter(t => t !== theme)
        : [...prevSelected, theme]
    );
  };

  const handleModeSelection = (mode: string) => {
    setSelectedMode(mode);
    setShowCustomOptions(mode === 'custom'); // Affiche les options personnalisées si 'custom' est sélectionné
    if (mode !== 'custom') {
      handleModeChange(mode); // Si le mode n'est pas custom, pas besoin de customCount ou customTimer
    }
  };

  const startQuiz = () => {
    handleThemeChange(selectedThemes);
    switch (selectedMode) {
      case 'custom':
        switch (customMode) {
          case 'questions':
            handleModeChange(selectedMode, customQuestionCount);
            break;
          case 'timer':
            handleModeChange(selectedMode, undefined, customTimerDuration);
            break;
          case 'survival':
            handleModeChange(selectedMode, undefined, undefined, customLives);
            break;
          default:
            break;
        }
        break;
      case 'survival':
        handleModeChange(selectedMode, undefined, undefined, customLives);
        break;
      default:
        if (selectedMode) {
          handleModeChange(selectedMode);
        }
        break;
    }

    handleStartQuiz();
    console.log('Mode sélectionné :', selectedMode);
    console.log('Thèmes sélectionnés :', selectedThemes);
    console.log('Nombre de questions personnalisées :', customQuestionCount);
    console.log('Durée personnalisée du timer :', customTimerDuration);
    console.log('Nombre de vies personnalisées :', customLives);
    navigate('/quiz');
  };

  return (
    <div className="container">
      <div className="mode-column">
        <h2>Choisissez un mode de jeu</h2>
        {modes.map(mode => (
          <div key={mode.id}>
            <input
              type="radio"
              id={mode.id}
              name="mode"
              onChange={() => handleModeSelection(mode.value)}
              checked={selectedMode === mode.value}
            />
            <label 
              htmlFor={mode.id} 
              className={selectedMode === mode.value ? 'selected-mode' : ''}
            >
              {mode.label}
            </label>
          </div>
        ))}

        {/* Afficher l'entrée pour customQuestionCount ou customTimer si le mode est 'custom' */}
        {showCustomOptions && (
          <div className="fade-in"> {/* Ajoutez la classe d'animation ici */}
            <label className={customMode === 'questions' ? 'selected-mode' : ''}>
              <input
                type="radio"
                name="customMode"
                value="questions"
                onChange={() => setCustomMode('questions')}
                checked={customMode === 'questions'}
              />
              Mode Questions
            </label>
            <label className={customMode === 'timer' ? 'selected-mode' : ''}>
              <input
                type="radio"
                name="customMode"
                value="timer"
                onChange={() => setCustomMode('timer')}
                checked={customMode === 'timer'}
              />
              Mode Timer
            </label>
            <label className={customMode === 'survival' ? 'selected-mode' : ''}>
              <input
                type="radio"
                name="customMode"
                value="survival"
                onChange={() => setCustomMode('survival')}
                checked={customMode === 'survival'}
              />
              Mode Survie
            </label>

            {/* Affichage du nombre de questions uniquement si l'utilisateur choisit le mode questions */}
            {customMode === 'questions' && (
              <div>
              <label className="custom-label" htmlFor="custom-count">Nombre de questions</label>
              <input
                  type="number"
                  id="custom-count"
                  value={customQuestionCount}
                  onChange={(e) => setCustomQuestionCount(parseInt(e.target.value))}
                  min="10"
                  className="custom-input"
                />
              </div>
            )}

            {/* Si le mode est timer, on peut définir une durée personnalisée */}
            {customMode === 'timer' && (
              <div>
                <label className="custom-label" htmlFor="custom-timer">Durée du timer (en secondes)</label>
                <input
                  type="number"
                  id="custom-timer"
                  value={customTimerDuration}
                  onChange={(e) => setCustomTimerDuration(parseInt(e.target.value))}
                  min="10"
                  className="custom-input"
                />
              </div>
            )}

            {/* Si le mode est survie, on peut définir le nombre de vies */}
            {customMode === 'survival' && (
              <div>
                <label className="custom-label" htmlFor="custom-lives">Nombre de vies</label>
                <input
                  type="number"
                  id="custom-lives"
                  value={customLives}
                  onChange={(e) => setCustomLives(parseInt(e.target.value))}
                  min="1"
                  max="10"
                  className="custom-input"
                />
              </div>
            )}
          </div>
        )}
      </div>

      <div className="theme-column">
        <h2 className="choose">Choisissez vos thèmes</h2>
        {themes.map(theme => (
          <div 
            key={theme.value} 
            className={`theme-card ${selectedThemes.includes(theme.value) ? 'selected-theme' : ''}`}
          >
            <label htmlFor={theme.value} className="theme-content">
              <h3>{theme.name}</h3>
              <img src={theme.data.cover} alt={theme.name} className="theme-image" />
            </label>
            <input
              type="checkbox"
              id={theme.value}
              value={theme.value}
              checked={selectedThemes.includes(theme.value)}
              onChange={() => handleThemeSelection(theme.value)}
              className="theme-checkbox"
            />
          </div>
        ))}
        <button className="start-button fade-in fade-out" onClick={startQuiz} style={{ display: selectedThemes.length > 0 && selectedMode ? 'block' : 'none' }}>
          Démarrer le quiz
        </button>
      </div>
    </div>
  );
};

export default Home;

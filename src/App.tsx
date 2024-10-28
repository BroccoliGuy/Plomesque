import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';

const App: React.FC = () => {
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  const [customQuestionCount, setCustomQuestionCount] = useState<number | undefined>(undefined);
  const [customTimerDuration, setCustomTimerDuration] = useState<number | undefined>(undefined);
  const [customLives, setCustomLives] = useState<number | undefined>(undefined); // Ajoute l'état pour customLives

  console.log('App component is rendering'); // Ajoutez cette ligne

  // Déterminer le nombre de questions en fonction du mode sélectionné
  const questionCount = selectedMode === '20-questions' ? 20 : 
                        selectedMode === 'custom' ? Infinity :
                        10;

  const handleThemeChange = (themes: string[]) => {
    setSelectedThemes(themes);
  };

  const handleModeChange = (mode: string, customCount?: number, timerDuration?: number, lives?: number) => {
    setSelectedMode(mode);
    
    if (mode === 'custom' && customCount) {
      setCustomQuestionCount(customCount);
    } else {
      setCustomQuestionCount(undefined);
    }

    if (mode === 'timer' || mode === 'custom') {
      setCustomTimerDuration(timerDuration);
    } else {
      setCustomTimerDuration(undefined);
    }

    // Met à jour le nombre de vies si en mode survie ou personnalisé
    if (mode === 'survival' || mode === 'custom') {
      setCustomLives(lives); 
    } else {
      setCustomLives(undefined); 
    }
  };

  const handleCustomQuestionCountChange = (count: number) => {
    setCustomQuestionCount(count);
  };

  const handleCustomTimerDurationChange = (duration: number) => {
    setCustomTimerDuration(duration);
  };

  const handleCustomLivesChange = (lives: number) => {
    setCustomLives(lives); // Mettre à jour les vies personnalisées
  };

  const handleStartQuiz = () => {
    console.log('Quiz démarré');
  };

  return (
    <BrowserRouter>
      <div className="App">
        <AppRoutes
        />
            <div>
      <h1>Hello, World!</h1>
      <p>This is my quiz application.</p>
    </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
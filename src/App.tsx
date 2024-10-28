import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Results from './components/Results';

const App: React.FC = () => {
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  const [customQuestionCount, setCustomQuestionCount] = useState<number | undefined>(undefined);
  const [customTimerDuration, setCustomTimerDuration] = useState<number | undefined>(undefined);
  const [customLives, setCustomLives] = useState<number | undefined>(undefined);

  console.log('App component is rendering');

  const questionCount = selectedMode === '20-questions' ? 20 : 
                        selectedMode === 'custom' ? Infinity : 10;

  const handleThemeChange = (themes: string[]) => setSelectedThemes(themes);

  const handleModeChange = (mode: string, customCount?: number, timerDuration?: number, lives?: number) => {
    setSelectedMode(mode);
    setCustomQuestionCount(mode === 'custom' && customCount ? customCount : undefined);
    setCustomTimerDuration((mode === 'timer' || mode === 'custom') ? timerDuration : undefined);
    setCustomLives((mode === 'survival' || mode === 'custom') ? lives : undefined);
  };

  const handleCustomQuestionCountChange = (count: number) => setCustomQuestionCount(count);
  const handleCustomTimerDurationChange = (duration: number) => setCustomTimerDuration(duration);
  const handleCustomLivesChange = (lives: number) => setCustomLives(lives);

  const handleStartQuiz = () => console.log('Quiz démarré');

  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route
            path="/home"
            element={
              <Home
                handleThemeChange={handleThemeChange}
                handleModeChange={handleModeChange}
                handleStartQuiz={handleStartQuiz}
              />
            }
          />
          <Route
            path="/quiz"
            element={
              <Quiz
                selectedThemes={selectedThemes}
                questionCount={questionCount}
                mode={selectedMode}
                customQuestionCount={customQuestionCount} 
                customTimerDuration={customTimerDuration} 
                customLives={customLives}
              />
            }
          />
          <Route path="/results" element={<Results />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
        <h2>Application en cours d'exécution</h2>
      </div>
    </HashRouter>
  );
};

export default App;

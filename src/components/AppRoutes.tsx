import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Quiz from './Quiz';
import Results from './Results';

interface AppRoutesProps {
  selectedThemes: string[];
  questionCount: number;
  selectedMode: string | null;
  customQuestionCount?: number; 
  customTimerDuration?: number; 
  customLives?: number; // Ajouter la prop pour les vies personnalisées
  handleThemeChange: (themes: string[]) => void;
  handleModeChange: (mode: string) => void;
  handleStartQuiz: () => void;
  handleCustomQuestionCountChange: (count: number) => void; 
  handleCustomTimerDurationChange: (duration: number) => void; 
  handleCustomLivesChange: (lives: number) => void; // Ajouter la fonction pour changer les vies
}

const AppRoutes: React.FC<AppRoutesProps> = ({
  selectedThemes,
  questionCount,
  selectedMode,
  customQuestionCount,
  customTimerDuration, 
  customLives, // Inclure customLives ici
  handleThemeChange,
  handleModeChange,
  handleStartQuiz,
  handleCustomQuestionCountChange,
  handleCustomTimerDurationChange,
  handleCustomLivesChange, // Passer la fonction ici
}) => {
  return (
    <Routes>
      <Route
        path="/"
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
            customLives={customLives} // Passer les vies personnalisées ici
          />
        }
      />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
};

export default AppRoutes;

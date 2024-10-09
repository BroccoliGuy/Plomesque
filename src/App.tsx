import React from 'react';
import AppRoutes from './components/routes';
import './styles/Quiz.css'; // Assure-toi d'avoir un fichier CSS pour le style

const App: React.FC = () => {
    return (
        <div className="App">
            <AppRoutes />
        </div>
    );
};

export default App;

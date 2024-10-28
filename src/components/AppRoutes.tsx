import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home'; // Assurez-vous que ce chemin est correct

const AppRoutes: React.FC = ({}) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Ajoutez d'autres routes si nécessaire */}
    </Routes>
  );
};

export default AppRoutes;

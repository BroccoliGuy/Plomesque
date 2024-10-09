import React, { useState } from 'react';

const Home: React.FC = () => {
    const [selectedThemes, setSelectedThemes] = useState<string[]>([]);

    const themes = [
        { name: 'Drapeaux du monde', value: 'flags' },
        // Ajoute d'autres thèmes ici
    ];

    const handleCheckboxChange = (theme: string) => {
        setSelectedThemes((prev) => 
            prev.includes(theme) ? prev.filter(t => t !== theme) : [...prev, theme]
        );
    };

    const handleConfirm = () => {
        // Logique pour rediriger vers le quiz avec les thèmes sélectionnés
        console.log('Thèmes sélectionnés:', selectedThemes);
    };

    return (
        <div>
            <h1>Sélectionnez vos thèmes de quiz</h1>
            {themes.map((theme) => (
                <div key={theme.value}>
                    <input
                        type="checkbox"
                        id={theme.value}
                        value={theme.value}
                        onChange={() => handleCheckboxChange(theme.value)}
                    />
                    <label htmlFor={theme.value}>{theme.name}</label>
                </div>
            ))}
            <button onClick={handleConfirm}>Confirmer</button>
        </div>
    );
};

export default Home;

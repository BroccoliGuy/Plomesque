# Plomesque

Bienvenue sur **Plomesque**, une application de quiz interactive où vous pouvez tester vos connaissances sur divers thèmes, notamment les drapeaux du monde et bien plus encore. Sélectionnez un thème, choisissez un mode de jeu et démarrez le quiz pour tester vos connaissances de manière ludique et stimulante !

## Table des matières

- [Aperçu du projet](#aperçu-du-projet)
- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Structure du projet](#structure-du-projet)

---

## Aperçu du projet

Plomesque est un quiz interactif développé avec **React** et **TypeScript**. Il est hébergé sur [GitHub Pages](https://broccoliguy.github.io/Plomesque/home) et peut être accédé directement via ce lien.

L'application propose plusieurs thèmes et modes de jeu personnalisés, permettant aux utilisateurs de tester leurs connaissances de manière flexible et divertissante. Ce projet est structuré de manière à être facilement extensible, permettant l'ajout de nouveaux thèmes et de fonctionnalités sans grande complexité.

## Fonctionnalités

- **Sélection de thèmes** : Choisissez parmi plusieurs thèmes, y compris les drapeaux, les fruits, etc.
- **Modes de jeu personnalisables** : 
  - Mode 10 questions
  - Mode 20 questions
  - Mode 60 secondes
  - Mode Survie
  - Mode personnalisé avec configuration avancée
- **Interface intuitive et responsive** : Une interface utilisateur moderne, responsive, qui s'adapte à toutes les tailles d'écran.
- **Statistiques de fin de jeu** : Résultats et répartition des réponses par thème sélectionné.

## Installation

Pour exécuter ce projet en local, suivez les étapes ci-dessous :

### Prérequis

- Node.js et npm (Node Package Manager)
- Un accès à [GitHub](https://github.com/) pour cloner le dépôt

### Étapes d'installation

1. **Clonez le dépôt** :

    ```bash
    git clone https://github.com/BroccoliGuy/Plomesque.git
    cd Plomesque
    ```

2. **Installez les dépendances** :

    ```bash
    npm install
    ```

3. **Lancez l'application** :

    ```bash
    npm start
    ```

4. Accédez à l'application dans votre navigateur à l'adresse suivante :

    ```
    http://localhost:3000
    ```

## Utilisation

1. Accédez à la page d'accueil de **Plomesque**.
2. Choisissez un ou plusieurs thèmes.
3. Sélectionnez votre mode de jeu préféré (10 questions, 20 questions, etc.).
4. Cliquez sur "Démarrer le quiz" et amusez-vous à répondre aux questions.
5. À la fin du quiz, consultez vos résultats et statistiques par thème.

## Structure du projet

Le projet est structuré comme suit :

Plomesque/
├── public/                         # Fichiers statiques
├── src/
│   ├── components/                 # Composants React (Header, Quiz, Results)
│   ├── styles/                     # Fichiers CSS et animations (Header, Quiz, Results)
│   ├── themes/                     # Dossiers de thèmes (ex. index.ts, flags.ts, capitals.ts)
│   │   ├── assets/                 # Images de thèmes
│   │   └── covers/                 # Images de thèmes affichées dans Home
│   ├── App.tsx                     # Composant principal
│   └── index.tsx                   # Point d'entrée de l'application
├── .gitignore
├── package.json                    # Dépendances et scripts npm
└── README.md                       # Documentation du projet


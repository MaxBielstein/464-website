import React, { useState, useEffect, useRef, useCallback } from 'react';
import Confetti from 'react-confetti';
import '../css/hangman.css';
// const wordsList = [
//     "react", "javascript", "middleware", "function", "variable",
//     "constant", "programming", "interface", "inheritance", "component",
//     "framework", "library", "state", "props", "hooks",
//     "context", "redux", "router", "node", "express"
// ];
const wordsList = ['state', 'props']; // For presentation

const Hangman = () => {
    const [word, setWord] = useState("");
    const [hiddenWord, setHiddenWord] = useState("");
    const [usedLetters, setUsedLetters] = useState([]);
    const [guessesLeft, setGuessesLeft] = useState(6);
    const [gameOver, setGameOver] = useState(false);
    const [win, setWin] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const canvasRef = useRef(null);

    const chooseWord = useCallback(() => wordsList[Math.floor(Math.random() * wordsList.length)], []);

    const drawBaseAndPole = useCallback(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 4;
        // Base
        ctx.beginPath();
        ctx.moveTo(10, 150);
        ctx.lineTo(150, 150);
        ctx.stroke();
        // Pole
        ctx.beginPath();
        ctx.moveTo(30, 150);
        ctx.lineTo(30, 10);
        ctx.lineTo(100, 10);
        ctx.lineTo(100, 30);
        ctx.stroke();
    }, []);

    const drawHangman = useCallback((stage) => {
        drawBaseAndPole();
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.lineWidth = 4;
        const parts = [
            () => ctx.arc(100, 50, 20, 0, Math.PI * 2, true), // Head
            () => { ctx.moveTo(100, 70); ctx.lineTo(100, 110); }, // Body
            () => { ctx.moveTo(100, 80); ctx.lineTo(80, 100); }, // Left Arm
            () => { ctx.moveTo(100, 80); ctx.lineTo(120, 100); }, // Right Arm
            () => { ctx.moveTo(100, 110); ctx.lineTo(80, 130); }, // Left Leg
            () => { ctx.moveTo(100, 110); ctx.lineTo(120, 130); }  // Right Leg
        ];
        parts.slice(0, stage).forEach(part => { ctx.beginPath(); part(); ctx.stroke(); });
    }, [drawBaseAndPole]);

    const resetGame = useCallback(() => {
        const selectedWord = chooseWord();
        setWord(selectedWord);
        setHiddenWord("_".repeat(selectedWord.length));
        setUsedLetters([]);
        setGuessesLeft(6);
        setGameOver(false);
        setWin(false);
        setShowConfetti(false);
        drawBaseAndPole();
    }, [chooseWord, drawBaseAndPole]);

    useEffect(() => {
        resetGame();
    }, [resetGame]);

    useEffect(() => {
        if (guessesLeft !== 6) {
            drawHangman(6 - guessesLeft);
        }
    }, [guessesLeft, drawHangman]);

    const handleGuess = useCallback((letter) => {
        if (usedLetters.includes(letter) || gameOver) return;
    
        const newUsedLetters = [...usedLetters, letter];
        setUsedLetters(newUsedLetters);
        
        if (word.includes(letter)) {
            const newHiddenWord = word.split('').map((char, i) =>
                newUsedLetters.includes(char) ? char : hiddenWord[i]
            ).join('');
            setHiddenWord(newHiddenWord);
            if (newHiddenWord === word) {
                setWin(true);
                setShowConfetti(true);
                setGameOver(true);
            }
        } else {
            setGuessesLeft(prev => prev - 1);
            if (guessesLeft - 1 === 0) {
                setHiddenWord(word);
                setGameOver(true);
            }
        } // eslint-disable-next-line
    }, [word, usedLetters, gameOver, guessesLeft]);

    return (
        <div className="hangmanGame">
            <div className="container">
                <h1>Hangman</h1>
                {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
                <canvas ref={canvasRef} width="160" height="160"></canvas>
                <p className="wordDisplay">Guess the word: {hiddenWord}</p>
                <p>Guesses left: {guessesLeft}</p>
                <div className="letterButtons">
                    {!gameOver && "abcdefghijklmnopqrstuvwxyz".split('').map(letter => (
                        <button key={letter} className="letterButton" onClick={() => handleGuess(letter)} disabled={usedLetters.includes(letter)}>
                            {letter}
                        </button>
                    ))}
                    {gameOver && (
                        <div className="gameOverText">
                            {win ? <p className="winText">Congratulations! You won!</p> : <p className="tryAgainText">Try again! The word was {word}.</p>}
                            <button className="playAgainButton" onClick={resetGame}>Play Again</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
    
};

export default Hangman;

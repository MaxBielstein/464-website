import React, { useState, useEffect } from 'react';
import './css/main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Slider, Box } from '@mui/material';
import AboutPage from './pages/AboutPage';
import MainHeader from './pages/MainHeader';
import ResumePage from './pages/Resume';
import Projects from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import Hangman from './pages/Hangman';
import LinksPage from './pages/LinksPage';
import FinanceAPI from './pages/FinanceAPIPage';

function App() {
  const [colorValue, setColorValue] = useState(195); // roughly light blue
  const handleChange = (event, newValue) => {
    setColorValue(newValue);
  };

  useEffect(() => {
    document.body.style.backgroundColor = `hsl(${colorValue}, 53%, 79%)`; // This seems close to light blue
  }, [colorValue]);

  return (
    <BrowserRouter>
      <MainHeader />
      <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/" element={<AboutPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/links" element={<LinksPage />} />
          <Route path="/hangman" element={<Hangman />} />
          <Route path="/finance" element={<FinanceAPI />} />
      </Routes>
      <Box sx={{ position: 'fixed', bottom: 16, right: 16 }}>
        <Slider
          value={colorValue}
          onChange={handleChange}
          aria-labelledby="background-color-slider"
          min={0}
          max={360}
          sx={{ width: 200 }}
        />
      </Box>
    </BrowserRouter>
  );
}

export default App;

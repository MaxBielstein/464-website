import './css/main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import MainHeader from './pages/MainHeader';
import ResumePage from './pages/Resume';
import Contact from './pages/Contact';
import Projects from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import Hangman from './pages/Hangman';
import LinksPage from './pages/LinksPage';

function App() {
  return (
    
    <BrowserRouter>
    <MainHeader />
      <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/links" element={<LinksPage />} />
          <Route path="/hangman" element={<Hangman />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

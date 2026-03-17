import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import News from './pages/News';
import ContactModal from './components/ContactModal';
import ParticlesBackground from './components/ParticlesBackground';
import './App.css';

function App() {
  const [contactOpen, setContactOpen] = React.useState(false);

  return (
    <Router>
      <div className="App min-h-screen bg-background-primary relative noise-overlay">
        <ParticlesBackground />
        <Header onContactClick={() => setContactOpen(true)} />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home onContactClick={() => setContactOpen(true)} />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </main>
        <Footer onContactClick={() => setContactOpen(true)} />
        <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      </div>
    </Router>
  );
}

export default App;

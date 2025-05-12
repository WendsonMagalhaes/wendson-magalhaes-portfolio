import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Skill from './pages/Skill/Skill'
import Summary from './pages/Summary/Summary'
import Portfolio from './pages/Portfolio/Portfolio'
import Contact from './pages/Contact/Contact'


function App() {
  return (
    <>
      <Header />

      <main className="main-content">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skill">
          <Skill />
        </section>
        <section id="summary">
          <Summary />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;

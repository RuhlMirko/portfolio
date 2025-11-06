import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import './styles.css';

function App() {
  return (
    <>          
      <Hero />      
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Resume />
      </main>        
      <Footer />
    </>
  );
}

export default App

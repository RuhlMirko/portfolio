import tenziesImg from '../assets/tenzies.png';
import assemBlyImg from '../assets/assembly.png';

export default function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <ul>
        <li>
          <a href="" className='project-card'>
            <div className='project-info'>
              <h3>Tenzies Game</h3>
              <p>An interactive dice game where players roll until all dice show the same number. Features a timer and high score tracking with localStorage.</p>
              <p>In this project I learned how to use React useState hook and persistent data storage.</p>
              <p>The hardest part was implementing a real-time timer and integrating localStorage for tracking high scores.</p>
            </div>
            
            <img src={tenziesImg} alt="Tenzies game project" />
          </a>          
        </li>

        <li>
          <a href="" className='project-card'>
            <div className='project-info'>
              <h3>Assembly: Endgame</h3>
              <p>A programmer's take on the classic Hangman game, featuring programming-related vocabulary and terminology.</p>
              <p>This project was a practice to learn how to work with useEffect.</p>
              <p>The most difficult part was using classes conditionally, and update the pressed keys.</p>
            </div>            
            <img src={assemBlyImg} alt="Assembly Endgame game project" />
          </a>        
        </li>
      </ul>
    </section>
  );
}

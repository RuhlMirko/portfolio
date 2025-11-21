import tenziesImg from '../assets/tenzies.png';
import assemBlyImg from '../assets/assembly.png';
import chefClaudeImg from '../assets/chefClaude.png';
import TechUsed from './TechUsed';

export default function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <ul>
        <li className='project-item'>
          <a href="" className='project-card'>
            <article className='project-info'>
              <header>
                <img src={tenziesImg} alt="Tenzies game project" />
                <h3>Tenzies Game</h3>
              </header>
              
              <p>An interactive dice game where players roll until all dice show the same number. Features a timer and high score tracking with localStorage.</p>
              <p>In this project I learned how to use React useState hook and persistent data storage.</p>
              <p>The hardest part was implementing a real-time timer and integrating localStorage for tracking high scores.</p>
              <TechUsed tech={['react', 'html5', 'css3', 'javascript']}/>
            </article>            
            
          </a>          
        </li>

        <li className='project-item'>
          <a href="" className='project-card'>
            <article className='project-info'>
              <header>
                <img src={assemBlyImg} alt="Assembly Endgame game project" />
                <h3>Assembly: Endgame</h3>
              </header>              
              <p>A programmer's take on the classic Hangman game, featuring programming-related vocabulary and terminology.</p>
              <p>This project was a practice to learn how to work with useEffect.</p>
              <p>The most difficult part was using classes conditionally, and update the pressed keys.</p>
              <footer>                
                <TechUsed tech={['react', 'html5', 'css3' ,'javascript']}/>
              </footer>
              
              
            </article>            
            
          </a>        
        </li>

        <li className='project-item'>
          <a href="" className='project-card'>
            <article className='project-info'>
              <header>
                <img src={chefClaudeImg} alt="Project screenshot" />
                <h3>Chef Claude</h3>
              </header>
              
              <p>This website gives you a recipe with the ingredients that you want.</p>
              <p>Since the AI boom I always wanted to use it for a project made by me. 
                This project help me figure out how AI models work under the hood and how to give a sensible and usable response to render into a page.</p>
              <p>The hardest roadblock I had was trying to understand how to translate an AI response into something I could render.</p>
              <TechUsed tech={['react', 'html5', 'css3', 'javascript', 'python']}/>
            </article>            
            
          </a>
        </li>
      </ul>
    </section>
  );
}

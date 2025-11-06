import tenziesImg from '../assets/tenzies.png';
import assemBlyImg from '../assets/assembly.png';

export default function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <ul>
        <li >
          <a href="" className='project-card'>
            <div className='project-info'>
              <h3>Tenzies game</h3>
              <p>This project mimics the game of tenzies where you have to have all of the same face of dice to win the game</p>
            </div>
            
            <img src={tenziesImg} alt="Tenzies game project" />
          </a>          
        </li>

        <li>
          <a href="" className='project-card'>
            <div className='project-info'>
              <h3>Assembly: Endgame</h3>
              <p>This game is basically HangMan but with a programming twist to it</p>
            </div>            
            <img src={assemBlyImg} alt="" />
          </a>        
        </li>
      </ul>
    </section>
  );
}

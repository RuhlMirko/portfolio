import tenziesImg from '../assets/tenzies.png';
import assemBlyImg from '../assets/assembly.png';
import chefClaudeImg from '../assets/chefClaude.png';
import TechUsed from './TechUsed';
import React from 'react';

export default function Projects() {
  const [currProj, setCurrProj] = React.useState(null)

  return (
    <section id="projects">
      <h2 className='hover-slide'>My Projects</h2>
      <div className='projects-container'>
          
          <ul className='projects-menu'>
            <li className='hover-slide'><button>Tenzies game <span>React</span></button></li>
            <li className='hover-slide'><button>Assembly Endgame <span>React</span></button></li>
            <li className='hover-slide'><button>Van Life <span>React Router</span></button></li>
            <li className='hover-slide'><button>Tenzies game</button></li>
          </ul>

          <div className='project-card'>
            {/* <h3>projectsData.tenzies.title</h3> */}
            <h3>Tenzies Game</h3>
            <p>{/* projectsData.tenzies.description*/}</p>
          </div>

        </div>
    </section>
  );
}

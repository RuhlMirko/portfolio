import { ul } from 'motion/react-client';
import TechUsed from './TechUsed';
import React from 'react';

export default function Projects() {
  const projects = ['tenzies','vanlife','assembly']
  const [currProj, setCurrProj] = React.useState(null)


  // const ProjectMenu = projects.map((item)=>{
  //   return (
  //     <ul>
  //       <li className='hover-slide'><button>Tenzies</button></li>
  //     </ul>
  //   )
  // })

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
          {/* <ProjectMenu /> */}

          <div className='project-card'>
            {/* <h3>projectsData.tenzies.title</h3> */}
            <h3 className='project-title'>Tenzies Game</h3>
            <p>{/* projectsData.tenzies.description*/}</p>
            {/* <TechUsed tech='html5'/> */}
          </div>

        </div>
    </section>
  );
}

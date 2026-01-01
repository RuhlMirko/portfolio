import { ul } from 'motion/react-client';
import TechUsed from './TechUsed';
import React from 'react';
import projectData from './data.json'

export default function Projects() {
  const [currProj, setCurrProj] = React.useState(0)  


  const toggleProj= (id) => {
    setCurrProj(id)
  }

  const projectsElements = projectData.projects.map((curr, index)=>{
  return (
    <div key={index} className={currProj === index ? 'project-card active-card':'project-card '}>
      <h3 className='project-title'>{curr.title}</h3>
      <img src={new URL(`../assets/projectThumbs/${curr.thumbnail}`, import.meta.url).href} alt="" className='project-thumbnail'/>
      <p>{curr.description.split('*').map((paragraph)=>(<p>{paragraph}</p>))}</p>
    </div>)
  })

  return (
    <section id="projects">
      <h2 className='hover-slide'>My Projects</h2>
      <div className='projects-container'>          
          <ul className='projects-menu'>
            <li className='hover-slide'><button onClick={()=>toggleProj(0)} className={currProj === 0 ? 'active-tab ':''}>Tenzies game <span>React</span></button></li>
            <li className='hover-slide'><button onClick={()=>toggleProj(1)} className={currProj === 1 ? 'active-tab ':''}>Chef Claude <span>React</span></button></li>
            <li className='hover-slide'><button onClick={()=>toggleProj(2)} className={currProj === 2 ? 'active-tab ':''}>Van Life <span>React Router</span></button></li>            
          </ul>
          <div className='project-cards-wrapper'>
            {projectsElements}
          </div>
        </div>
    </section>
  );
}

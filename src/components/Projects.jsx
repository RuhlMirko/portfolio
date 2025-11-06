import tenziesImg from '../assets/tenzies.png';

export default function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <p>Here are some of the projects I have worked on.</p>
      <ul>
        <li >
          <a href="" className='project-card'>
            <div className='project-info'>
              <h3>Tenzies game</h3>
              <p>This project</p>
            </div>
            
            <img src={tenziesImg} alt="Tenzies game project" />
          </a>
          
        </li>
      </ul>
    </section>
  );
}

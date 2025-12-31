import pfp from '../assets/pfp.jpg';

export default function About() {
  return (
    <section id='about' className="outline-section">
      <h2 className="hover-slide">Welcome to My Portfolio</h2>
      <div className='about-info'>
        <img src={pfp} alt="Profile picture" />
        <div>
          <p>
          Full Stack Developer with experience building modern web applications. I specialize in creating intuitive user experiences with a strong focus on design and accessibility.
          </p>
          <p>
            I'm proficient in both <a href="">Frontend</a>  and  <a href="">Backend</a> development, working with technologies such as React, Node.js, Express, and MongoDB. I enjoy crafting responsive, user-friendly interfaces while ensuring robust server-side performance.
          </p>
          <p>
            In previous <a href="#projects">projects</a>, I've successfully developed and deployed web applications that exceed client expectations and deliver seamless user experiences. I'm always eager to learn new technologies and stay current with industry trends.
          </p>
          <p>
            I stay up to date with the latest best practices in web development and design, ensuring my projects are both modern and efficient. I actively seek new challenges and opportunities to grow as a developer and designer, and I'm confident my skills and passion will make a positive impact on any project.
          </p>
        </div>
        
      </div>      
    </section>
  );
}

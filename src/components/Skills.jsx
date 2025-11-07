export default function Skills() {
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <article>
        <section id="frontend" className="outline">
          <h3>Frontend development</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React.js</li>    
            <li>Next.js</li>        
          </ul>
        </section>

        <section id="backend" className="outline">
          <h3>Backend development</h3>
          <ul>
            <li>Python</li>          
            <li>Node.js</li>
            <li>Express.js</li>
            <li>SQL</li>
          </ul>
        </section>
        
        <section id="mobile" className="outline">
            <h3>Mobile development</h3>
            <ul>
              <li>React Native</li>
              <li>Kotlin</li>
              <li>Android studio</li>
            </ul>
        </section>

        <section id="other" className="outline">
          <h3>Other Skills</h3>
          <ul>
            <li>Git</li>
            <li>Github</li>          
            <li>Streamlit</li>
          </ul>
        </section>
      </article>
      
    </section>
  );
}

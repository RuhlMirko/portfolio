import TechUsed from "./TechUsed";

export default function Skills() {
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <article>
        <section id="frontend" className="outline">
          <h3>Frontend development</h3>
          <ul>
            <TechUsed tech={['html5', 'css3', 'javascript', 'typescript', 'react', 'nextjs']} />       
          </ul>
        </section>

        <section id="backend" className="outline">
          <h3>Backend development</h3>
          <ul>          
            <TechUsed tech={['python', 'nodejs', 'express', 'azuresqldatabase', 'supabase']} />  
          </ul>
        </section>
        
        <section id="mobile" className="outline">
            <h3>Mobile development</h3>
            <ul>
              <TechUsed tech={['reactnative', 'kotlin', 'androidstudio']} />              
            </ul>
        </section>

        <section id="other" className="outline">
          <h3>Other Skills</h3>
          <ul>
            <TechUsed tech={['git', 'github', 'streamlit']} />
          </ul>
        </section>
      </article>
      
    </section>
  );
}

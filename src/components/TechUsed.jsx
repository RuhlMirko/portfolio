export default function TechUsed(props) { 
  
  const techNames = {
    html5: 'HTML',
    css3: 'CSS',
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    kotlin: 'Kotlin',
    androidstudio: 'Android Studio',
    reactnative: 'React Native',
    express: 'Express.js',
    azuresqldatabase: 'SQL',
    react: 'React',
    nodejs: 'Node.js',
    nextjs: 'Next.js',
    python: 'Python',
    git: 'Git',
    github: 'GitHub',
    streamlit: 'Streamlit',
    supabase: 'Supabase'
  };

  const techPills = props.tech.map((techItem, index) => {
    const iconVariant = techItem === 'reactnative' || techItem === 'express' ? 'original' : 'plain';
    return (
      <li key={index}>
        <span className='pill'>
            <i className={`devicon-${techItem}-${iconVariant} `}></i>
            {techNames[techItem]}         
        </span>
      </li>
    );
  });

  return (
    <ul className="techstack-ul">        
        {techPills}        
    </ul>
  );
}
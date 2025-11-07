export default function TechUsed(props) {
  
  // TODO: make each item text correspond to it's real name eg.: html5==HTML, css3==CSS, javascript==JavaScript, etc.

  const techNames = {
    html5: 'HTML',
    css3: 'CSS',
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    kotlin: 'Kotlin',
    androidstudio: 'Android Studio',
    reactnative: 'React Native',
    expressjs: 'Express.js',
    azuresqldatabase: 'SQL',
    react: 'React',
    nodejs: 'Node.js',
    nextjs: 'Next.js',
    python: 'Python',
    git: 'Git',
    github: 'GitHub',
    streamlit: 'Streamlit'
  };

  const techPills = props.tech.map((techItem, index) => {
    const iconVariant = techItem === 'reactnative' ? 'original' : 'plain';
    return (
      <span key={index} className='pill outline'>
          <i className={`devicon-${techItem}-${iconVariant} shortcut-icon`}></i>
          {techNames[techItem]}         
      </span>
    );
  });

  return (
    <footer className='tech-used'>        
        {techPills}        
    </footer>
  );
}
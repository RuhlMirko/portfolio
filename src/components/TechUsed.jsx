export default function TechUsed(props) {
    console.log(props.tech);

  const techPills = props.tech.map((techItem, index) => (
    <span key={index} className='pill outline'>
        <i className={`devicon-${techItem}-plain shortcut-icon`}></i>
        {techItem.charAt(0).toUpperCase() + techItem.slice(1)}
    </span>
  ));

  return (
    <footer className='tech-used'>        
        {techPills}        
    </footer>
  );
}
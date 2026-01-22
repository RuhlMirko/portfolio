import React from "react";

export default function Header() {
  const [isExpanded, setIsExpanded] = React.useState(false)

  function toggleExpanded (){
    setIsExpanded(prev=>!prev)
  }

  return (
    <nav>      
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>        
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded={isExpanded}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

import { useRef } from 'react';

export default function Shortcut() {
    const statusRef = useRef(null);

    const copyEmailToClipboard = () => {
        const email = "ruhlmirkojoel@gmail.com";        
        navigator.clipboard.writeText(email).then(() => {
            if (statusRef.current) {
                statusRef.current.classList.add('show');
                setTimeout(() => {
                    statusRef.current?.classList.remove('show');
                }, 2200);
            }
        }).catch((err) => {            
            statusRef.current.innerText = 'Failed to copy email:' + err;
        });
    };

    return (
        <div className="shortcut">
        <ul className="shortcut-links">
          <li>
            <a href="#about" className="button" aria-label="LinkedIn">                   
              <i className="devicon-linkedin-plain shortcut-icon"></i>          
            </a>
          </li>
          
          <li>
            <a href="#about" className="button" aria-label="GitHub">                   
              <i className="devicon-github-original shortcut-icon"></i>          
            </a>
          </li>
          
          <li>  
            <button type="button" onClick={copyEmailToClipboard} className="button" aria-label="Copy email">                   
              <i className="fas fa-envelope shortcut-icon"></i>
            </button>
          </li>        
        </ul>
        <h3 ref={statusRef} className="email-status">Email copied to clipboard</h3>
      </div>
    )
}
function CopyEmailToClipboard() {
    const email = "ruhlmirkojoel@gmai.com";
    navigator.clipboard.writeText(email).then(() => {
      const statusElement = document.querySelector('.email-status');
      statusElement.style.opacity = '1';
      setTimeout(() => {
        statusElement.style.opacity = '0';
      }, 2000);
    });
    }


export default function Shortcut() {
    return (
        <div className="shortcut">
        <ul className="shortcut-links">
          <li>
            <a href="#about" className="button">                   
              <i className="devicon-linkedin-plain shortcut-icon"></i>          
            </a>
          </li>
          
          <li>
            <a href="#about" className="button">                   
              <i className="devicon-github-original shortcut-icon"></i>          
            </a>
          </li>
          
          <li>  
            <button onClick={()=>CopyEmailToClipboard} className="button">                   
              <i class="fas fa-envelope shortcut-icon"></i>
            </button>
          </li>        
        </ul>
        <h3 className="email-status">Email copied to clipboard</h3>
      </div>
    )}
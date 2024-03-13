import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faDatabase, faEnvelope,faUser}  from '@fortawesome/free-solid-svg-icons';
import {faJs, faHtml5,faCss3Alt,faNode,faReact,faJava,faGithub } from "@fortawesome/free-brands-svg-icons";


const Body = ()=>{
    return(
        <div >
        <div className="technology">
        <h3 className="subject">Tech Stack</h3>
        <FontAwesomeIcon className="fa-icon" icon={faJs}  />
        <FontAwesomeIcon className="fa-icon" icon={faHtml5} />
        <FontAwesomeIcon className="fa-icon" icon={faCss3Alt}  />
        <FontAwesomeIcon className="fa-icon" icon={faNode} />
        <FontAwesomeIcon className="fa-icon" icon={faReact}  />
        <FontAwesomeIcon className="fa-icon" icon={faJava}  />
        <FontAwesomeIcon className="fa-icon" icon={faGithub}  />
        <FontAwesomeIcon className="fa-icon" icon={faDatabase}  />
        </div>
        <div className="project-section">
        <h3 className="subject">Projects</h3>
        <div className="projects">
            1
        </div>
        <div className="projects">
            <div>3</div>
            <div>3</div>
        </div>
        
        
      
     
    
     


  
        </div>
        </div>
    )
}

export default Body;
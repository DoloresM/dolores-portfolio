import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEnvelope,faUser}  from '@fortawesome/free-solid-svg-icons';
import {faJs, faHtml5,faCss3Alt,faNode,faReact,faJava} from "@fortawesome/free-brands-svg-icons";


const Body = ()=>{
    return(
        <>
        <div className="technology">

        </div>
        <div className="projects">
        
      
        <FontAwesomeIcon icon={faJs} size="lg" />
        <FontAwesomeIcon icon={faHtml5} size="lg"/>
        <FontAwesomeIcon icon={faCss3Alt} size="lg" />
        <FontAwesomeIcon icon={faNode}  size="lg"/>
        <FontAwesomeIcon icon={faReact} size="lg" />
        <FontAwesomeIcon icon={faJava} />
    
     


  
        </div>
        </>
    )
}

export default Body;
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
        <h3 className="subject">Projects</h3>
        <div className="project-section">
                <div className="projects" > 
                        <div className="project-container">
                        
                            <section>
                                <img src="https://images.unsplash.com/photo-1631864032962-950ceb71ba9a?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image of users using blockchain application" />
                            </section>
                            <section>
                                <h4>Featured Project</h4>
                                <h5>Blockchain App</h5>
                                <p> Crypocurrency manger for users to view the change in prices of various protocols over time </p>
                            </section>
                        </div>
                    
                </div>
                <div className="projects">
                    <figure>
                        <img src="https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=2790&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="plate of grilled produce" />
                        <figcaption>
                            <h4>Featured Project</h4>
                            <h5>Hack My Plate</h5>
                            <p>Receipe website for people exploring vegan dishes</p>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src="https://images.unsplash.com/photo-1583306346437-f2143c0f11fc?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="a room in the Met Museum" />
                        <figcaption>
                            <h4>Featured Project</h4>
                            <h5>Meet the Met</h5>
                            <p>Full stack application leveraging The Met's
                            API to give user's a preview of the museum via an online experience.</p>
                        </figcaption>
                    </figure>
                </div>
         
        </div>
    </div>
    )
}

export default Body;
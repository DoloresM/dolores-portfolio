import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Form from "./Form.jsx";
import {faLinkedin, faSquareTwitter} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Contact = (props) => {
const {phone, email} = props;
    return (
        <div>
            <Navbar/>
            <div className="container contact-container" >
                <div>
                    <h1>Contact Me</h1>
                    <div className="content contact" >
                        <div><p>Phone number: {phone}</p></div>
                        <div> <FontAwesomeIcon className="fa-contact" icon={faEnvelope} /> <p>Email: {email}</p></div>
                        <div>
                            <FontAwesomeIcon className="fa-contact" icon={faLinkedin} size="lg" />
                       
                            <FontAwesomeIcon className="fa-contact" icon={faSquareTwitter} />
                        </div>
                    </div>
                </div>
                <div>
                    <form className="contact-form" style={{height: "400px"}}>    
                        <div className="form-info">
                            <div>
                                <label >
                                    <input type="text" name="name" placeholder="Name"/>
                                </label>
                            </div>
                            <div className="email">
                                <label>
                                    <input type="text" name="email" placeholder="Email" />
                                </label>
                            </div>
                        </div>
                        <div className="form-message">
                            <label>
                                <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
                            </label>
                        </div>
                
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;
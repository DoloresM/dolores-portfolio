import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import {faLinkedin, faSquareTwitter} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Contact = (props) => {
const {phone, email} = props;
    return (
        <div >
            <Navbar/>
            <div className="container full-screen">
                <h1>Contact Me</h1>
                <div className="content">
                    <p>Get in touch with us for any queries or feedback.</p>
                    <p>Here is my business phone number: {phone}</p>
                    <p>Here is my email: {email}</p>
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    <FontAwesomeIcon icon={faEnvelope} />
                    <FontAwesomeIcon icon={faSquareTwitter} />
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;
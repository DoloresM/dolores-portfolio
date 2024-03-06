import Navbar from "./Navbar.jsx";

const Contact = (props) => {
const {phone, email} = props;
    return (
        <div>
            <Navbar/>
            <h2>Contact Us</h2>
            <p>Get in touch with us for any queries or feedback.</p>
            <p>Here is my business phone number: {phone}</p>
            <p>Here is my email: {email}</p>
        </div>
    );
};

export default Contact;
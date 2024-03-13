import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";


const Summary = () => {
    return (
        <div className="container full-screen">
          <h1>Journey of a Programmer</h1>
          <div className="content">
            <p>
                Introduction and Background:

                Briefly introduce yourself and your team (if applicable). Mention your name, role, and perhaps a bit about your background in web development.
                Mission Statement:

                Clearly state the mission or goal of your web development services. This helps potential clients understand the purpose and values of your work.
                <br/>
                Expertise and Specialization:

                Describe your areas of expertise and specialization within web development. This could include front-end development, back-end development, full-stack development, UI/UX design, e-commerce solutions, mobile-responsive design, etc.
                Note: This may include transferable skills from previous professions/work experience. The goal is to establish a target audience with skills you presently have.

                <br/>
                Technologies and Tools:

                List the technologies, programming languages, frameworks, and tools you are proficient in. This gives clients an idea of the technical capabilities you bring to the table.
                <br/>
                Client Focus:

                Describe the types of clients you work with or industries you have experience in. This could be startups, small businesses, e-commerce, healthcare, education, etc.
                Value Proposition:

                learly articulate what sets your web development services apart from others. This could be your attention to detail, commitment to client satisfaction, innovative solutions, etc.

                <br/>
                Commitment to Quality:

                Emphasize your commitment to delivering high-quality, bug-free, and user-friendly websites or web applications. Mention any quality assurance processes you follow.

                <br/>
                Client-Centric Approach:

                Highlight your focus on client satisfaction and how you ensure their needs and vision are met throughout the development process.

                <br/>
                Education and Certifications:

                If relevant, mention any degrees, certifications, or training related to web development.
            </p>
        </div>                    
    </div>
    )
}  

export default function About(){


    return(
        <div>
            <Navbar/>
            <Summary/>
            <Footer/> 
        </div>
    );
}

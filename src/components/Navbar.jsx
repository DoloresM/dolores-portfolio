import {Link} from "react-router-dom";

export default function Navbar (){
    return(
        <nav className="navbar">
            <ul>
                <li>
                    <Link className="link-style" to="/">Home</Link>
                </li>
                <li>
                    <Link className="link-style" to="/about">About</Link>
                </li>
                <li>
                    <Link className="link-style" to="/contact">Contact</Link>
                </li>
            </ul>
            <hr/>
        </nav>
    )
}
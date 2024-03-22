import {Link} from "react-router-dom";
import Menu from "./Menu.jsx";

export default function Navbar (){
    return(
        <nav className="navbar container">
            <div className="logo">
                <span>DM</span>
            </div>
            <ul>
                <li>
                    <Link className="link-style" to="/">Home</Link>
                </li>
                <li>
                    <Link className="link-style" to="/about">About</Link>
                </li>
                <li>
                    <Link className="link-style" to="/blog">Blog</Link>
                </li>
                <li>
                    <Link className="link-style" to="/contact">Contact</Link>
                </li>

            </ul>
          
        </nav>
    )
}
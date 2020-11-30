import { Link } from "react-router-dom";
export default function Navigation(props) {
    return (
        <>
            <nav className="navbar navbar-light">
                <ul className="navbar"  >
                    <li className="nav-link">
                        <Link to="/" ><strong>Kaloha Facility Management</strong></Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/about-us" >About Us</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/get-quote" >Get a quote</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/" >Book a service</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
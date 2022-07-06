import "./NavBar.css";
import Button from "./Button.js";
import "./Button.css";
import {Link, NavLink} from "react-router-dom"

// import logo from "/images/logo.png";

function NavBar() {
    return (

        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid" id="navbar-container">
                <Link to="/" className="navbar-brand navbar-option">
                    <img src="/images/logo.png" alt="Logo" id="logo"/>
                </Link>
                <div className="navbar-toggler-container">
                    <button
                        className="navbar-toggler collapse-btn"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <Link to="/contact" class={"nav-link"}>Contact

                    </Link>
                    <Link to="/about" class={"nav-link"}>
                        About
                    </Link>
                    <Link to="/login" class={"nav-link"}>Log in
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

import "./NavBar.css";
import NavButton from "./NavButton.js";
// import logo from "/images/logo.png";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <a className="navbar-brand navbar-option" href="/">
                    <img src="/images/logo.png" alt="Logo" id="logo"/>
                </a>
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
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <NavButton name={"Contact"}/>
                    <NavButton name={"About"}/>
                    <NavButton name={"Log in"}/>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

import "./NavBar.css";
import Button from "./Button.js";
import "./Button.css";

// import logo from "/images/logo.png";

function NavBar() {
    return (

        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid" id="navbar-container">
                <a className="navbar-brand navbar-option" href="/">
                    <img src="/images/logo.png" alt="Logo" id="logo"/>
                </a>
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
                    <Button name={"Contact"} class={"nav-button"}/>
                    <Button name={"About"} class={"nav-button"}/>
                    <Button name={"Log in"} class={"nav-button"}/>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

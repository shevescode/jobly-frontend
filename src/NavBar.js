import "./NavBar.css"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <a className="navbar-brand navbar-option" href="/">Jobly</a>
                <button className="navbar-toggler collapse-btn" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/">Contact</a>
                        </li>
                    </ul>
                    <button className="btn login-btn" type="submit">Log in</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
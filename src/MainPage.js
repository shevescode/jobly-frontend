import "./MainPage.css"
import {Link, NavLink} from "react-router-dom";

function MainPage() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-4">
                    {/*<img src="/images/hand1.png" id="right-hand"/>*/}

                </div>
                <div className="col-4">
                    <Link to="/create" className={"position-absolute top-50 start-50 translate-middle create-acc-btn"}>
                        Create Account
                    </Link>

                </div>
                <div className="col-4">
                    {/*<img src = "/images/hand.png" id="left-hand"/> TODO: scaling hands*/}
                </div>
            </div>
        </div>);
}

export default MainPage;

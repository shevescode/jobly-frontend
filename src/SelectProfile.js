import "./SelectProfile.css"
import {Link} from "react-router-dom";

function SelectProfile() {
    return (
        <div className="container-fluid text-center">
            <div className="row align-items-center" style={{height: "85vh"}}>
                <div className="col-6">
                    <Link to="/candidate" className={"select-profile-btn"}>
                        Become a candidate
                    </Link>

                </div>

                <div className="col-6">
                    <Link to="/employer" className={"select-profile-btn"}>
                        Become an employer
                    </Link>
                </div>
            </div>
        </div>);
}

export default SelectProfile;

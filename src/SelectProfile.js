import "./SelectProfile.css"
import {Link, NavLink} from "react-router-dom";

function SelectProfile() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-4" style={{ textAlign: 'center'}}>
                    <Link to="/candidate" className={"position-absolute top-50 select-profile-btn"}>
                        Become a employer!
                    </Link>

                </div>
                <div className="col-4">
                </div>
                <div className="col-4">
                    <Link to="/employer" className={"position-absolute top-50 select-profile-btn"}>
                        Become an employer!
                    </Link>
                </div>
            </div>
        </div>);
}

export default SelectProfile;

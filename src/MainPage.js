import "./MainPage.css"
import NavButton from "./NavButton";

function MainPage() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-4">
                    {/*<img src="/images/hand1.png" id="right-hand"/>*/}

                </div>
                <div className="col-4">
                    <NavButton class={"position-absolute top-50 start-50 translate-middle create-acc-btn"} name={"Create Account"} type="submit"/>
                </div>
                <div className="col-4">
                    {/*<img src = "/images/hand.png" id="left-hand"/> TODO: scaling hands*/}
                </div>
            </div>
        </div>
    );
}

export default MainPage;

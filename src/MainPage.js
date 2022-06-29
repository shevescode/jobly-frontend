import "./MainPage.css"
import Button from "./Button";
import {CreateAccountForm} from "./CreateAccountForm";

function MainPage() {
    return (<div className="container-fluid">
            <div className="row">
                <div className="col-4">
                    {/*<img src="/images/hand1.png" id="right-hand"/>*/}

                </div>
                <div className="col-4">
                    <Button class={"position-absolute top-50 start-50 translate-middle create-acc-btn"}
                            name={"Create Account"} type="submit"/>
                    <CreateAccountForm/>
                </div>
                <div className="col-4">
                    {/*<img src = "/images/hand.png" id="left-hand"/> TODO: scaling hands*/}
                </div>
            </div>
        </div>);
}

export default MainPage;

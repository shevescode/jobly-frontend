import "./MainPage.css"

function MainPage() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-4">
                    Candidate Card
                </div>
                <div className="col-4">
                    <button className="btn btn-outline-success create-btn position-absolute top-50 start-50 translate-middle" type="submit">Create account</button>
                </div>
                <div className="col-4">
                    Employer Card
                </div>
            </div>
        </div>
    );
}

export default MainPage;

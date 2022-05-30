import "./MainPage.css"

function MainPage() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-4">
                    <h5 className="example-card">Candidate Card</h5>
                </div>
                <div className="col-4">
                    <button className="btn create-btn position-absolute top-50 start-50 translate-middle" type="submit">Create account</button>
                </div>
                <div className="col-4">
                    <h5 className="example-card">Employer Card</h5>
                </div>
            </div>
        </div>
    );
}

export default MainPage;

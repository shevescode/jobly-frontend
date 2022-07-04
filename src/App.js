import NavBar from "./NavBar";
import MainPage from "./MainPage";
import Footer from "./Footer";
import "./App.css";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {CreateAccountForm} from "./CreateAccountForm";
import {LogInForm} from "./LogInForm";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <NavBar/>
            </header>
            <main className="App-main">
                <BrowserRouter>
                    {/*<nav>*/}
                    {/*    <Link to="/create"><Button class={"position-absolute top-50 start-50 translate-middle create-acc-btn"}*/}
                    {/*                               name={"Create Account"} type="submit"/></Link>*/}

                    {/*</nav>*/}
                    <Routes>
                        <Route path="/" element={<MainPage/>}></Route>
                        <Route path="/create" element={<CreateAccountForm/>}></Route>
                        <Route path="/login" element={<LogInForm/>}></Route>
                        {/*<Route path="/contact" element={<Contact/>}></Route>*/}
                        {/*<Route path="/about" element={<About/>}></Route>*/}
                    </Routes>
                </BrowserRouter>
            </main>
            <footer className="App-footer">
                <Footer/>
            </footer>
        </div>
    );
}

export default App;

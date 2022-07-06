import NavBar from "./NavBar";
import MainPage from "./MainPage";
import Footer from "./Footer";
import "./App.css";
import {Routes, Route} from "react-router-dom";
import {CreateAccountForm} from "./CreateAccountForm";
import {LogInForm} from "./LogInForm";

function App() {
    console.log(window.location);
    return (
        <div className="App">
            <header className="App-header">
                <NavBar/>
            </header>
            <main className="App-main">
                <Routes>
                    <Route exact path="/" element={<MainPage/>}></Route>
                    <Route exact path="/create" element={<CreateAccountForm/>}></Route>
                    <Route exact path="/login" element={<LogInForm/>}></Route>
                </Routes>
            </main>
            <footer className="App-footer">
                <Footer/>
            </footer>
        </div>
    );
}

export default App;

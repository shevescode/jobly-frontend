import NavBar from "./NavBar";
import MainPage from "./MainPage";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <NavBar />
        </header>
        <main className="App-main">
            <MainPage />
        </main>
        <footer className="App-footer">
            <Footer />
        </footer>
    </div>
  );
}

export default App;

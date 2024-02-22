import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Routes />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

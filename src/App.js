import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="island" />
        </main>
        <footer className="App-footer">
          {" "}
          <small>
            {" "}
            Coded by{" "}
            <a
              href="https://github.com/brookebusteed"
              target="_blank"
              rel="noreferrer"
            >
              Brooke Busteed{" "}
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/brookebusteed/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced{" "}
            </a>{" "}
            on GitHub and, hosted on{" "}
            <a
              href="https://dictionary-app-bb.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Netlify{" "}
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;

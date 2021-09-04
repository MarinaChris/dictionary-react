import logo from "./logo.png";
import './App.css';
import Dictionary from "../my-app/src/Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo"/>
      <main>
        <Dictionary />
      </main>
      </header>
      <footer className="text-center">Coded by Marina Chris</footer>
      </div>
    </div>
  );
}

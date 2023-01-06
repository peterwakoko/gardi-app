import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Aside from "./components/Aside";

function App() {
  return (
    <div className="App">
      <Header />
      <hr className="line" />
      <div className="wrap-container">
        <Nav />
        <Main />
        <Aside />
      </div>
    </div>
  );
}

export default App;

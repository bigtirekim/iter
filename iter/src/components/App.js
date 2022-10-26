import "../styles/App.scss";
import Navigation from "./Navigation";
import Cards from "./Cards";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    // <Login></Login>
    <div className="App">
      <Navigation />
      <br></br>
      <br></br>
      <main>
        <div className="container">
          <Cards />
          <Sidebar />
        </div>
      </main>
    </div>
  );
}

export default App;

import React from "react";
import "../styles/app.css";
import Search from "../components/Search";
import nasalogo from "/home/dylstar/tech-test/src/assets/nasalogo.jpeg"

const App = () => {
  return (
    <div className="app">
      <img src={nasalogo} 
      alt="nasa logo"
       className="Logo"
       />
      <Search/>
    </div>
  );
}

export default App;

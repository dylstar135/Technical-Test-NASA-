import React, { useState } from "react";
import"../styles/global-styles.css";
import "../styles/app.css";
import Search from "../components/Search";
import nasalogo from "/home/dylstar/tech-test/src/assets/nasalogo.jpeg"
import SearchResults from "./SearchResults";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="app">
      <img src={nasalogo} 
      alt="nasa logo"
       className="Logo"
       />
      <Search setSearchResults={setSearchResults}/>
      <SearchResults searchResults = {searchResults}/>
    </div>
    
  );
}

export default App;

import React, { useState } from "react";
import"../styles/global-styles.css";
import "../styles/app.css";
import Search from "../components/Search";
import nasalogo from "/home/dylstar/tech-test/src/assets/pngwing.com.png";
import SearchResults from "./SearchResults";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="app">
      <img
        src={nasalogo}
        alt="nasa logo"
        className="Logo"
      />
      <Search setSearchResults={setSearchResults} />
      <header className="fixed-header"></header>
      <main className="scrollable-content">
        
          <SearchResults searchResults={searchResults} />
      
      </main>
      <footer className="fixed-footer"></footer>
    </div>
  );
};

export default App;

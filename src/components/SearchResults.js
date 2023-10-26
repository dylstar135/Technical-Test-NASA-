import React from "react";
import "../styles/search-results.css";

const SearchResults = ({searchResults})=> {
    if (!searchResults.length) {
        return <p>No results</p>;
      } else {
        return (
          <div className = "card-container">
            {searchResults.map((image) => (
              <img className="card-image" src={image} alt="spaceImage" />
            ))}
          </div>
        );
      };
    };

export default SearchResults;

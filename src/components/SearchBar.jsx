import React from "react";


function SearchBar(){
    return (
        <div>
        <div className="search-selection">
            <form className="radio-group">
                <label className="search-button-selection">
                <input type="radio" name="option" value="option1" />
                Best Match
                </label>

                <label className="search-button-selection">
                <input type="radio" name="option" value="option2" />
                Highest Rated
                </label>

                <label className="search-button-selection">
                <input type="radio" name="option" value="option3" />
                Most Reviewed
                </label>
            </form>
            </div>

        <div className="Search-card">
              <input type="text" placeholder="Search..." class="search-input" />
              <input type="text" placeholder="Location..." class="search-input" />
              <button class="search-button">🔍</button>
        </div></div>
    );
};


export default SearchBar;
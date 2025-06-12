import React from "react";


function SearchBar(){
    return (
        <div className="search-row">
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

        <div className="search-card">
              <input type="text" placeholder="Search..." className="search-input" />
              <input type="text" placeholder="Location..." className="search-input" />
              <button class="search-button">Let's go!</button>
        </div></div>
    );
};


export default SearchBar;
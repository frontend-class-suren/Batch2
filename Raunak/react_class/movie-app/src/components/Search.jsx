import React from "react";
import "./Search.css";

function Search({ searchInput, search }) {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for a Movie..."
                className="search"
                onChange={searchInput}
                onKeyDown={search}
            />
        </div>
    );
}

export default Search;

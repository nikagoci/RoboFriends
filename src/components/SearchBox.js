import React from "react";

const SearchBox = ( {seachfield, searchChange}) => {
    return (
        <div className="pa2">
            <input
            className="pa3 ba b--green bg-lightest-blue outline"
            type="search"
            placeholder="search robots"
            onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox
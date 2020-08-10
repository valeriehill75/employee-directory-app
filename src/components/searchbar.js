import React from "react";

function Searchbar(props) {
    return (
        <div className="searchbar">
            <form onSubmit={props.ignoreSubmit} className="form-inline">
                <input
                value={props.search}
                onChange={props.handleInputChange}
                className="form-control"
                type="text"
                placeholder="Search by name"
                />
            </form>
        </div>
    )
}
export default Searchbar;
import React from "react";
import "../App.css";

const TableSortBar = (props) => {
    return (
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col"> <a href="#name" className="sortBtn" onClick={() => props.sortTable("first")}>First Name</a> </th>
                <th scope="col"> <a href="#name" className="sortBtn" onClick={() => props.sortTable("last")}>Last Name</a> </th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">ID</th>
            </tr>
        </thead>
    );
}

export default TableSortBar;
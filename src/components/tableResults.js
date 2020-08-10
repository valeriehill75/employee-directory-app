import React from "react";

function TableResults(props) {
    return (
        <tbody>
            {props.results.map(employee => (
                <tr>
                    <td> <img src={employee.image.medium} alt={employee.name}></img></td>
                    <td>{employee.first}</td>
                    <td>{employee.last}</td>
                    <td><a href={employee.email}>{employee.email}</a></td>
                    <td>{employee.phone}</td>
                    <td>{employee.id}</td>
                </tr>
            ))}
        </tbody>
    );
}

export default TableResults;
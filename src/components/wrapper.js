import React from "react";

function Wrapper({ children }) {
    return (
        <div className="wrapper card">
            <div className="card-body">
                {children}
            </div>
        </div>
    );
}

export default Wrapper;
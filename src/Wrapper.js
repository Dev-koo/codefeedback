import React from "react";

function Wrapper({ children }) {
    const style = {
        color: "red",
        border: "1px solid black",
        hight: 100,
        padding: 16
    };
    return <div style={style}>{children}</div>;
}

export default Wrapper;

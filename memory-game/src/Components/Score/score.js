import React from "react";

const style = {
    textAlign: "center",
    height: "70px",
    position: "relative",
    lineHeight: "1em",
    padding: "0",
    margin: "0"
}

const Score = props => (
    <div style={style} className="gameScore">
        <h2 className="score">Your Score: {props.total} </h2>
        <h2 className="status">{props.status}</h2>

    </div>
);


export default Score;
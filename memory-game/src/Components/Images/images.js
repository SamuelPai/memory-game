import React from "react";

var style = {
    backgroundColor: "white",
    borderRadius: "2px",
    height: "150px",
    margin: "1rem",
    marginTop: "10px",
    position: "relative",
    width: "150px",
    boxShadow: "0 3px 6px #999, 0 3px 6px #999;",
    overflow: "hidden"
}

const Image = props => (
    <div style={style} className = "card img-container hover">
        <img alt={props.name} src={props.image} id={props.id} 
            onClick={() => props.shuffleCards(props.id)} className="shuffleScore" />
    </div>
);


export default Image;
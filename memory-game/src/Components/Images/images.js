import React from "react";

var style = {
    backgroundColor: "white",
    borderRadius: "2px",
    maxHeight: "400px",
    margin: "1rem",
    marginTop: "10px",
    position: "relative",
    maxWidth: "400px",
    boxShadow: "0 3px 6px #999, 0 3px 6px #999;",
    overflow: "hidden",
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
}
var imgstyle = {
    width:  "200px",
    height: "200px",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
}

const Image = props => (
    <div className = "card img-container hover" style={style}>
        <img alt={props.name} src={props.image} id={props.id} 
            onClick={() => props.shuffleCards(props.id)} className="shuffleScore" style={imgstyle}/>
    </div>
);


export default Image;
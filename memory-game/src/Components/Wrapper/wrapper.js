import React from "react";

const style = {
    paddingTop: "10px",
    height: "100%",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    overflow: "auto",
    marginLeft: "auto",
    marginRight: "auto"
}

const Wrapper = props => (
    <div style={style} className="wrapper">{props.children}</div>
);


export default Wrapper;
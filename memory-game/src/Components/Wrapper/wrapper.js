import React from "react";

const style = {
    display: 'flex',
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: "10px",
    overflow: "auto",
    marginLeft: "auto",
    marginRight: "auto"
}

const Wrapper = props => (
    <div style={style} className="wrapper">{props.children}</div>
);


export default Wrapper;
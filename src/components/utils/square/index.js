import React from "react";
import "./square.scss";

export default function(props){
    const className = `${props.style || "accent"} square`;
    return ( <div className={className} style={{background: props.color}}/> );
}
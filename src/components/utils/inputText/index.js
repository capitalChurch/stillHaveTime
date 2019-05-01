import React from "react";

import "./inputText.scss"

export default function(props){
    const color = props.color || "yellow";
    return (
        <div className={`inputText ${color}`}>
            <input type="text" value={props.value} onChange={event => props.onChange(event.target.value)} />
        </div>
    )
}
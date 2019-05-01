import React from "react";

import "./inputText.scss"

export default function(props){
    return (
        <div className="inputText">
            <input type="text" value={props.value} onChange={event => props.onChange(event.target.value)} />
        </div>
    )
}
import React from "react";

import "./inputText.scss"

export default function(props){
    const color = props.color || "yellow";
    const handleSubmit = e => {
        if(!props.handleSubmit)
            return;
        
        if(e.key !== "Enter")
            return;
        
        if(!e.target.value)
            return;
        
        props.handleSubmit();
    };
    
    return (
        <div className={`inputText ${color}`}>
            <input type="text" value={props.value} onChange={event => props.onChange(event.target.value)} onKeyUp={handleSubmit} />
        </div>
    )
}
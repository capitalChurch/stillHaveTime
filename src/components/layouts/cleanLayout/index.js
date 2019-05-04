import React from 'react';
import BackButton from "../../utils/backButton";
import ForwardButton from "../../utils/forwardButton";
import LogoChurch from "../../utils/logoChurch";
import Logo from "../../utils/logo";
import Square from "../../utils/square";
import LoadBar from "../../utils/loadBar";

import "./cleanLayout.scss";

export default function(props){
    const style = props.color || "blue";
    const styleComponents = style === "yellow" ? "primary" : "accent" ;
    return (
        <div className={`${props.className} layoutClean`} style={props.style}>
            <BackButton style={styleComponents}/>
            {!!props.nextPage && (<ForwardButton nextPage={props.nextPage} style={styleComponents}/>)}
            {!!props.time && !!props.nextPage && ( <LoadBar time={props.time} page={props.nextPage}/> )}
            <div className="topBar">
                <LogoChurch/>
                <Square style={styleComponents}/>
            </div>
            <div className="bodyLayout">
                {props.children}
            </div>
            <div className="footer">
                <Logo />
            </div>
        </div>
    )
}
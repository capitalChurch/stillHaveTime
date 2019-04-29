import React from 'react';
import LogoChurch from "../../utils/logoChurch";
import Square from "../../utils/square";

import "./basicLayout.scss";

export default function(props){
    return (
        <div className={`${props.className} basicLayout`}>
            <div className="topBar">
                <LogoChurch color="white"/>
                <Square/>
            </div>
            <div className="bodyLayout">
                {props.children}
            </div>
        </div>
    )
}
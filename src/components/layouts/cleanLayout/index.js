import React from 'react';
import BackButton from "../../utils/backButton";
import LogoChurch from "../../utils/logoChurch";
import Logo from "../../utils/logo";
import Square from "../../utils/square";

import "./cleanLayout.scss";

export default function(props){
    return (
        <div className={`${props.className} layoutClean`}>
            <div className="topBar">
                <LogoChurch/>
                <Square/>
            </div>
            <BackButton/>
            <div className="bodyLayout">
                {props.children}
            </div>
            <div className="footer">
                <Logo />
            </div>
        </div>
    )
}
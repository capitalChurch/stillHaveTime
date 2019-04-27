import React, { Component } from 'react';
import BackButton from "../../utils/backButton";
import LogoChurch from "../../utils/logoChurch";
import Logo from "../../utils/logo";
import Square from "../../utils/square";

import "./landingPage.scss";

export default class LandingPage extends Component{
    render = () => {
        return (
            <div className="resultado">
                <div className="topBar">
                    <LogoChurch/>
                    <Square/>
                </div>
                <BackButton/>
                <div className="footer">
                    <Logo />
                </div>
            </div>
        )
    }
}
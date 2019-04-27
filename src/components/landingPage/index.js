import React, { Component } from 'react';
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

import "./landingPage.scss";

export default class LandingPage extends Component{
    render = () => {
        return (
            <div className="resultado">
                <div className="topBar">
                    <Logo className="logo" />
                    <div className="square yellow" />
                </div>
            </div>
        )
    }
}
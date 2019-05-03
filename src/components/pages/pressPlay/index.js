import React, { Component } from "react";
import CleanLayout from "../../layouts/cleanLayout";
import Background from "../../../assets/images/background/crowd_bg.png";

import {ReactComponent as PlayArrow} from "../../../assets/images/play.svg";

import "./pressPlay.scss";

export default class PressPlay extends Component{
    render = () => {
        const style = {
            backgroundImage: `url(${Background})`
        };
        
        return (
            <CleanLayout className="pressPlay" style={style}>
                <span>aperte o play</span>
                <PlayArrow/>
            </CleanLayout>
        )
    }
} 

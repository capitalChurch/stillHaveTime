import React, { Component, Fragment } from "react";
import CleanLayout from "../../layouts/cleanLayout";
import Background from "../../../assets/images/background/crowd_bg.jpg";
import VideoInstitucional from "../../../assets/videos/videoInstitucional.mp4";

import {ReactComponent as PlayArrow} from "../../../assets/images/play.svg";

import "./pressPlay.scss";
import {getAlreadyWatchTheVideo, setAlreadyWatchTheVideo} from "../../../model/storage";
import {EnumRotas} from "../../../model/types";

export default class PressPlay extends Component{
    state = {
        showVideo: false,
        alreadyWatchedVideo: false
    };
    
    componentWillMount = () => this.setState({alreadyWatchedVideo: getAlreadyWatchTheVideo()});

    clickShowVideo = () => this.setState({showVideo: true}, () =>
        setTimeout(() => {
            this.setState({alreadyWatchedVideo: true});
            setAlreadyWatchTheVideo();
        }, 45 * 1000));

    
    render = () => {
        const style = {
            backgroundImage: `url(${Background})`
        };
        
        return (
            <CleanLayout className={`pressPlay ${this.state.showVideo? "hasVideo": ""}`} style={style} nextPage={this.state.alreadyWatchedVideo ? EnumRotas.YourName : null}>
                {!this.state.showVideo && (
                    <Fragment>
                        <span>aperte o play</span>
                        <PlayArrow onClick={this.clickShowVideo}/>
                    </Fragment>
                )}
                {this.state.showVideo && (
                    <video controls autoPlay={true}>
                        <source src={VideoInstitucional} type="video/mp4" />
                    </video>
                )}
            </CleanLayout>
        )
    }
} 

import React from "react";
import {withRouter} from "react-router-dom";
import "./loadBar.scss";
import {changeRoute} from "../../../model/constants";

class LoadBar extends React.Component{
    state = {
        percentTimesTen: 0
    };
    
    componentWillMount = () => this.updateTimer(0);
    
    updateTimer = percentTimesTen => {
        if(percentTimesTen === 1000){
            changeRoute(this.props, this.props.page);
            return;
        }
        
        this.setState({percentTimesTen}, () => setTimeout(() => this.updateTimer(++percentTimesTen), this.props.time))
    };

    render = () => {
        const {percentTimesTen} = this.state;
        const size = percentTimesTen === 1000 ? 0 : percentTimesTen / 10;
        return (
            <span className="loadBar" style={{width: `${size}vw`}}/>
        )
    }
}

export default withRouter(LoadBar);
import React from "react";
import {withRouter} from "react-router-dom";
import "./loadBar.scss";
import {changeRoute} from "../../../model/constants";
import moment from "moment";

class LoadBar extends React.Component{
    state = {
        startDate: null
    };
    
    componentWillMount = () => this.setState({startDate: moment()}, this.updateTimer);
    
    timePass = () => moment().diff(this.state.startDate, "milliseconds");
    
    updateTimer = () => {
        if(this.timePass() / 1000 > this.props.time){
            changeRoute(this.props, this.props.page);
            return;
        }
        
        this.setState({}, () => setTimeout(this.updateTimer, 10))
    };

    render = () => {
        const size = this.timePass() / (this.props.time * 10);
        return (
            <span className="loadBar" style={{width: `${size}vw`}}/>
        )
    }
}

export default withRouter(LoadBar);
import React from "react";
import "./forwardButton.scss";

import { ReactComponent as Arrow} from "../../../assets/images/arrow.svg";
import {changeRoute} from "../../../model/constants";
import {withRouter} from "react-router-dom";

function forwardButton(props){
    const style = props.style || "accent";
    const goesTo = () => {
        if(props.disabled)
            return;
        
        changeRoute(props, props.nextPage);
    };
    
    return (
        <div className={`wrapperForwardButton`} onClick={goesTo}>
            <div className={`forwardButton ${style}  ${props.disabled?"disabled":""}`}>
                <div className="icon">
                    <Arrow className="arrowForward"/>
                </div>
                <div className="text">
                    <span>avançar</span>
                </div>
            </div>
        </div>
    )
}

export default withRouter(forwardButton);
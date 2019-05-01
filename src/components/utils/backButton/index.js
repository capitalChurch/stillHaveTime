import React from "react";
import "./backButton.scss";

import { ReactComponent as Arrow} from "../../../assets/images/arrow.svg";

export default function(props){
    const style = props.style || "accent";
    return (
        <div className="wrapperBackButton">
            <div className={`backButton ${style}`}>
                <div className="icon">
                    <Arrow className="arrowBack"/>
                </div>
                <div className="text">
                    <span>voltar</span>
                </div>
            </div>
        </div>
    )
}
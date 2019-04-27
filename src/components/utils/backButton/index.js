import React from "react";
import "./backButton.scss";

import { ReactComponent as Arrow} from "../../../assets/images/arrow.svg";

export default function(props){
    return (
        <div className="wrapperBackButton">
            <div className="backButton">
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
import React from "react";
import "./backButton.scss";

import { ReactComponent as Arrow} from "../../../assets/images/arrow.svg";

export default function(props){
    return (
        <div className="backButton">
            <Arrow className="arrowBack"/>
        </div>
    )
}
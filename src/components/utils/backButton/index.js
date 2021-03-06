import React from "react";
import "./backButton.scss";

import { ReactComponent as Arrow} from "../../../assets/images/arrow.svg";
import {EnumRotas} from "../../../model/types";
import {changeRoute} from "../../../model/constants";
import {withRouter} from "react-router-dom";

function backButton(props){
    const style = props.style || "accent";
    const goesBack = () => changeRoute(props, EnumRotas.Back);
    return (
        <div className="wrapperBackButton" onClick={goesBack}>
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

export default withRouter(backButton);
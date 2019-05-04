import React, {Component, Fragment} from "react";
import Background from "../../../assets/images/background/calcular_color_bg.png";
import CleanLayout from "../../layouts/cleanLayout";
import {EnumRotas} from "../../../model/types";
import {changeRoute} from "../../../model/constants";

import "./calculates.scss";

export default class Calculates extends Component {

    handleClick = () => changeRoute(this.props, EnumRotas.Info);
    
    render = () => {
        const style = {
            backgroundImage: `url(${Background})`
        };

        return (
            <Fragment>
                <div className="yellowBackground" />
                <div className="blueBackground" />
                <CleanLayout className="calculates" style={style}>
                    <span className="firstPart" onClick={this.handleClick}>calc</span>
                    <span className="secondPart" onClick={this.handleClick}>ular</span>
                </CleanLayout>
            </Fragment>
        )
    }
}

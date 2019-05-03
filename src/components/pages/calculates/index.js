import React, {Component, Fragment} from "react";
import Background from "../../../assets/images/background/calcular_color_bg.png";
import CleanLayout from "../../layouts/cleanLayout";

import "./calculates.scss";

export default class Calculates extends Component {
    render = () => {
        const style = {
            backgroundImage: `url(${Background})`
        };

        return (
            <Fragment>
                <div className="yellowBackground" />
                <div className="blueBackground" />
                <CleanLayout className="calculates" style={style} >
                    <span className="firstPart">calc</span>
                    <span className="secondPart">ular</span>
                </CleanLayout>
            </Fragment>
        )
    }
}

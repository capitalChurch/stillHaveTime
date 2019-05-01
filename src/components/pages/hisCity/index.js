import React from "react";
import PictureLayout from "../../layouts/pictureLayout";
import InputText from "../../utils/inputText";

import Background from "../../../assets/images/background/address_color_bg.png";
import "./hisCity.scss";

export default class HisCity extends React.Component{
    render = () => {
        return(
            <PictureLayout bgImage={Background} className="hisCity" colorLayer="yellow">
                <div className="firstColumn">
                    <span className="title">Onde essa<br/>pessoa mora?</span>
                    <span className="item">Anna</span>
                    <span className="item">28</span>
                </div>
                <div className="secondColumn">
                    <InputText value="Brasília" color="blue" />
                </div>
            </PictureLayout>
        )
    }
}
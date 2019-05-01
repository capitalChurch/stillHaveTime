import React from "react";
import PictureLayout from "../../layouts/pictureLayout";
import Background from "../../../assets/images/background/address_bg.png";
import InputText from "../../utils/inputText";
import "./yourCity.scss";

export default class YourAddress extends React.Component{
    render = () => {
        return (
            <PictureLayout colorLayer="blue" className="yourCity" bgImage={Background}>
                <div className="firstColumn">
                    <span className="title">Onde você<br/>mora?</span>
                    <span className="item">João Paulo</span>
                    <span className="item">28</span>
                </div>
                <div className="secondColumn">
                    <InputText value="Brasília" />
                </div>                     
            </PictureLayout>
        )
    }
}
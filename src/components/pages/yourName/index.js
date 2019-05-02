import React from "react";
import PictureLayout from "../../layouts/pictureLayout";
import InputText from '../../utils/inputText'

import BackGround from "../../../assets/images/background/name_bg.png";
import "./yourName.scss";

export default class YourName extends React.Component{
    
    render = () =>
        (
        <PictureLayout className="yourName" colorLayer="blue" bgImage={BackGround}>
            <span>Qual é o<br/>seu nome?</span>
            <div className="form">
                <InputText value="João Paulo"/>
            </div>
        </PictureLayout>
    )
}
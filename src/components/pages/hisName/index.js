import React from "react";
import PictureLayout from "../../layouts/pictureLayout";
import InputText from '../../utils/inputText'

import BackGround from "../../../assets/images/background/name_color_bg.png";
import "./hisName.scss";

export default class HisName extends React.Component{

    render = () =>
        (
            <PictureLayout className="hisName" colorLayer="yellow" bgImage={BackGround}>
                <span>Qual é o nome<br/> dele(a)?</span>
                <div className="form">
                    <InputText value="Anna" color="blue"/>
                </div>
            </PictureLayout>
        )
}
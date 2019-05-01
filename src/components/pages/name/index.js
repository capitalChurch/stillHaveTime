import React from "react";
import PictureLayout from "../../layouts/pictureLayout";

import BackGround from "../../../assets/images/background/name_bg.png";
import "./name.scss";

export default function(props){
    return (
        <PictureLayout className="name" colorLayer="blue" bgImage={BackGround}>
            <span>Qual é o<br/>seu nome?</span>
            <div className="form">
                <input type="text" value="João Paulo" />
            </div>
        </PictureLayout>
    )
}
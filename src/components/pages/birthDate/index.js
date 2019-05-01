import React from "react";
import PictureLayout from "../../layouts/pictureLayout";
import BirthDateBg from "../../../assets/images/background/birthDate_bg.png";

import "./birthDate.scss";

export default function(props){
    return(
        <PictureLayout className="birthDate" bgImage={BirthDateBg} colorLayer="blue">
            <span>Qual é a sua <br/> data de nascimento?</span>
            <div className="form">
                <input type="number" value="01" />
                <span className="slash" />
                <input type="number" value="05" />
                <span className="slash" />
                <input type="number" value="1991" />
            </div>
        </PictureLayout>
    )
}
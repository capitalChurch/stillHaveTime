import React from "react";
import PictureLayout from "../../layouts/pictureLayout";
import BebeBg from "../../../assets/images/background/birthDate_bg.png";

import "./info.scss";

export default function(props){
    const white = texto => (<span className="accent">{texto}</span>);
    return (
        <PictureLayout colorLayer="blue" bgImage={BebeBg} className="info">
            <p>Quanto {white("tempo")} terá para<br />{white("compartilhar")} do amor e da<br/>graça de {white("jesus")} para ela?"</p>
        </PictureLayout>
    )
}
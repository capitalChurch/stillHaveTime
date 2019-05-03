import React from "react";
import PictureLayer from "../../layouts/pictureLayout";

import Background from "../../../assets/images/background/ferias_color_bg.png";
import "./vacationTogether.scss";

export default class VacationTogether extends React.Component{
    render = () => {
        return (
            <PictureLayer className="vacationTogether" colorLayer="yellow" bgImage={Background}>
                <div className="firstColumn">
                    <span className="title">Vocês passam <br /> as férias juntos?</span>
                    <div className="itens">
                        <span className="item">Anna</span>
                        <span className="item">28</span>
                        <span className="item">Brasília</span>
                        <span className="item">Família</span>
                        <span className="item">Prima</span>
                    </div>
                </div>
                <div className="secondColumn">
                    <span className="yesOption">Sim</span>
                    <span className="noOption">Não</span>
                </div>
            </PictureLayer>
        )
    }
}
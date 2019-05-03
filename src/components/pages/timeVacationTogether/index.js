import React from "react";
import PictureLayout from "../../layouts/pictureLayout";
import Background from "../../../assets/images/background/vezesquesevem_color_bg.png";
import ChooseNumber from "../../utils/chooseNumber";

import "./timeVacationTogether.scss";

export default class TimeVacationTogether extends React.Component{
    state = {
        vacationTimeTogether: 6    
    };
    
    changeTime = days => this.setState({vacationTimeTogether: days});
    
    render = () => {
        return (
            <PictureLayout className="timeVacationTogether" bgImage={Background} colorLayer="yellow">
                <span className="labelTitle">Vocês passam as férias juntos?</span>
                <div className="firstColumn">
                    <span className="title">Quantos dias <br /> ao ano?</span>
                </div>
                <div className="secondColumn">
                    <span className="age">{this.state.vacationTimeTogether}</span>
                    <ChooseNumber value={this.state.vacationTimeTogether} changeNumber={this.changeTime} qtyChange={3} color="blue" />
                </div>
            </PictureLayout>
        )
    }
}

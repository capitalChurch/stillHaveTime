import React from "react";
import PictureLayout from "../../layouts/pictureLayout";
import Background from "../../../assets/images/background/vezesquesevem_color_bg.png";
import ChooseNumber from "../../utils/chooseNumber";

import "./regularTimeTogether.scss";

export default class RegularTimeTogether extends React.Component{
    state = {
        regularTimeTogether: 24    
    };
    
    changeTimeTogether = hours => this.setState({regularTimeTogether: hours});
    
    render = () => {
        return (
            <PictureLayout className="regularTimeTogether" colorLayer="yellow" bgImage={Background}>
                <div className="firstColumn">
                    <span className="title">Quando estão no mesmo lugar, quantas horas passam juntos?</span>
                </div>
                <div className="secondColumn">
                    <span className="age">{this.state.regularTimeTogether}</span>
                    <ChooseNumber changeNumber={this.changeTimeTogether} value={this.state.regularTimeTogether} color="blue" qtyChange={3} limit={24}/>
                </div>
            </PictureLayout>
        )
    }
}
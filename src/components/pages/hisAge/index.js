import React from "react";
import PictureLayout from "../../layouts/pictureLayout";
import ChooseAge from "../../utils/chooseAge";
import Background from "../../../assets/images/background/age_color_bg.png"

import "./hisAge.scss";

export default class HisAge extends React.Component{
    state = {
        age: 58
    };

    changeAge = age => this.setState({age});

    render = () => {
        return (
            <PictureLayout colorLayer="yellow" className="hisAge" bgImage={Background}>
                <div className="firstColumn">
                    <span className="title">Qual a idade<br/>dele(a)?</span>
                    <span className="name">Anna</span>
                </div>
                <div className="secondColumn">
                    <span className="age">{this.state.age}</span>
                    <ChooseAge changeAge={this.changeAge} value={this.state.age} color="blue"/>
                </div>
            </PictureLayout>
        )
    }
}
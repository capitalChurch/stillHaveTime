import React from "react";
import PictureLayout from "../../layouts/pictureLayout";
import ChooseNumber from "../../utils/chooseNumber";
import AgeBg from "../../../assets/images/background/age_bg.png";

import "./yourAge.scss";

export default class YourAge extends React.Component{
    state = {
        age: 58
    };
    
    changeAge = age => this.setState({age});
    
    render = () => {
        return (
            <PictureLayout colorLayer="blue" bgImage={AgeBg} className="age">
                <div className="firstColumn">
                    <span className="title">Qual é a<br/>sua idade?</span>
                    <span className="name">João Paulo</span>
                </div>
                <div className="secondColumn">
                    <span className="age">{this.state.age}</span>
                    <ChooseNumber changeNumber={this.changeAge} value={this.state.age}/>
                </div>
            </PictureLayout>
        )
    }
}

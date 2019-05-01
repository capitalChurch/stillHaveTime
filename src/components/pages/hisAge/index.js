import React from "react";
import PictureLayout from "../../layouts/pictureLayout";
import ChooseAge from "../yourAge";

import "./hisAge.scss";

export default class HisAge extends React.Component{
    state = {
        age: 58
    };

    changeAge = age => this.setState({age});

    render = () => {
        return (
            <PictureLayout>
                <div className="firstColumn">
                    <span className="title">Qual a idade<br/>dele(a)?</span>
                    <span className="name">Anna</span>
                </div>
                <div className="secondColumn">
                    <span className="age">{this.state.age}</span>
                    <ChooseAge changeAge={this.changeAge} value={this.state.age}/>
                </div>
            </PictureLayout>
        )
    }
}
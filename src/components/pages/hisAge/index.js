import React from "react";
import PictureLayout from "../../layouts/pictureLayout";
import ChooseNumber from "../../utils/chooseNumber";
import Background from "../../../assets/images/background/age_color_bg.png"

import "./hisAge.scss";
import {getMyRelation, saveHisAge} from "../../../model/storage";
import {EnumRotas} from "../../../model/types";
import {formatBeautiful} from "../../../model/utils";

export default class HisAge extends React.Component{
    state = {
        age: 58
    };
    
    componentWillMount = () => this.setState({age: getMyRelation().age});

    changeAge = age => this.setState({age}, () => saveHisAge(age));

    render = () => {
        return (
            <PictureLayout colorLayer="yellow" className="hisAge" bgImage={Background} nextPage={EnumRotas.HisCity}>
                <div className="firstColumn">
                    <span className="title">Qual a idade<br/>dele(a)?</span>
                    <span className="name">{formatBeautiful(getMyRelation().name)}</span>
                </div>
                <div className="secondColumn">
                    <span className="age">{this.state.age}</span>
                    <ChooseNumber changeNumber={this.changeAge} value={this.state.age} color="blue"/>
                </div>
            </PictureLayout>
        )
    }
}
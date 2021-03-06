import React from "react";
import PictureLayout from "../../layouts/pictureLayout";
import ChooseNumber from "../../utils/chooseNumber";
import AgeBg from "../../../assets/images/background/age_bg.jpg";
import {getMySelf, saveMyAge} from "../../../model/storage";

import "./yourAge.scss";
import {EnumRotas} from "../../../model/types";
import {formatBeautiful} from "../../../model/utils";

export default class YourAge extends React.Component{
    state = {
        age: 58
    };
    
    componentWillMount = () => this.setState({age: getMySelf().age})

    changeAge = age => this.setState({age}, () => saveMyAge(age));
    
    render = () => {
        const {name} = getMySelf();
        return (
            <PictureLayout colorLayer="blue" bgImage={AgeBg} className="age" nextPage={EnumRotas.YourCity}>
                <div className="firstColumn">
                    <span className="title">Qual é a sua idade?</span>
                    <span className="name">{formatBeautiful(name)}</span>
                </div>
                <div className="secondColumn">
                    <span className="age">{this.state.age}</span>
                    <ChooseNumber changeNumber={this.changeAge} value={this.state.age}/>
                </div>
            </PictureLayout>
        )
    }
}

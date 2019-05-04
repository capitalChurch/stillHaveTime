import React from "react";
import PictureLayout from "../../layouts/pictureLayout";
import InputText from '../../utils/inputText'

import BackGround from "../../../assets/images/background/name_bg.png";
import "./yourName.scss";
import {getMySelf, saveMyName} from "../../../model/storage";
import {EnumRotas} from "../../../model/types";

export default class YourName extends React.Component{
    state = {
        name: ""
    };
    
    componentWillMount = () => this.setState({name: getMySelf().name});
    
    handleChangeName = name => this.setState({name}, () => saveMyName(name));

    render = () =>
        (
        <PictureLayout className="yourName" colorLayer="blue" bgImage={BackGround} nextPage={EnumRotas.YourAge}>
            <span>Qual é o<br/>seu nome?</span>
            <div className="form">
                <InputText value={this.state.name} onChange={this.handleChangeName}/>
            </div>
        </PictureLayout>
    )
}
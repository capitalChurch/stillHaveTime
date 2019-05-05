import React from "react";
import PictureLayout from "../../layouts/pictureLayout";
import InputText from '../../utils/inputText'
import { getMySelf, saveMyName } from "../../../model/storage";
import { EnumRotas } from "../../../model/types";
import { changeRoute } from "../../../model/constants";

import BackGround from "../../../assets/images/background/name_bg.jpg";

import "./yourName.scss";

export default class YourName extends React.Component{
    state = {
        name: ""
    };
    
    componentWillMount = () => this.setState({name: getMySelf().name});
    
    handleChangeName = name => this.setState({name}, () => saveMyName(name));

    render = () => (
        <PictureLayout className="yourName" colorLayer="blue" bgImage={BackGround} nextPage={EnumRotas.YourAge} btnForwardDisabled={!this.state.name}>
            <span>Qual é o<br/>seu nome?</span>
            <div className="form">
                <InputText value={this.state.name} onChange={this.handleChangeName} handleSubmit={() => changeRoute(this.props, EnumRotas.YourAge)}/>
            </div>
        </PictureLayout>
    );
}
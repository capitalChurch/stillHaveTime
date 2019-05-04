import React from "react";
import PictureLayout from "../../layouts/pictureLayout";
import InputText from '../../utils/inputText'

import BackGround from "../../../assets/images/background/name_color_bg.png";
import "./hisName.scss";
import {getMyRelation, saveHisName} from "../../../model/storage";
import {EnumRotas} from "../../../model/types";

export default class HisName extends React.Component{
    state ={
        name: ""
    };
    
    componentWillMount = () => this.setState({name: getMyRelation().name});
    
    handleChange = name => this.setState({name}, () => saveHisName(name));
    
    render = () => (
        <PictureLayout className="hisName" colorLayer="yellow" bgImage={BackGround} nextPage={EnumRotas.HisAge}>
            <span>Qual é o nome<br/> dele(a)?</span>
            <div className="form">
                <InputText value={this.state.name} color="blue" onChange={this.handleChange}/>
            </div>
        </PictureLayout>
    );
}
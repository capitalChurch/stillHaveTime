import React from "react";
import PictureLayout from "../../layouts/pictureLayout";
import InputText from "../../utils/inputText";

import Background from "../../../assets/images/background/address_color_bg.png";
import "./hisCity.scss";
import {getMyRelation, saveHisCity} from "../../../model/storage";

export default class HisCity extends React.Component{
    state = {
        city: ""    
    };
    
    componentWillMount = () => this.setState({city: getMyRelation().city});
    
    handleChange = city => this.setState({city}, () => saveHisCity(city));
    
    render = () => {
        const {name, age} = getMyRelation();
        return(
            <PictureLayout bgImage={Background} className="hisCity" colorLayer="yellow">
                <div className="firstColumn">
                    <span className="title">Onde essa<br/>pessoa mora?</span>
                    <span className="item">{name}</span>
                    <span className="item">{age}</span>
                </div>
                <div className="secondColumn">
                    <InputText value={this.state.city} color="blue" onChange={this.handleChange} />
                </div>
            </PictureLayout>
        )
    }
}
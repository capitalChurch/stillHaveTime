import React from "react";
import PictureLayout from "../../layouts/pictureLayout";
import Background from "../../../assets/images/background/address_bg.png";
import InputText from "../../utils/inputText";
import "./yourCity.scss";
import {getMySelf, saveMyCity} from "../../../model/storage";

export default class YourAddress extends React.Component{
    state = {
        city: ""
    };
    
    componentWillMount = () => this.setState({city: getMySelf().city});

    handleChange = city => this.setState({city}, () => saveMyCity(city));
    
    
    render = () => {
        const {name, age} = getMySelf();
        
        return (
            <PictureLayout colorLayer="blue" className="yourCity" bgImage={Background}>
                <div className="firstColumn">
                    <span className="title">Onde você<br/>mora?</span>
                    <span className="item">{name}</span>
                    <span className="item">{age}</span>
                </div>
                <div className="secondColumn">
                    <InputText value={this.state.city} onChange={this.handleChange} />
                </div>                     
            </PictureLayout>
        )
    }
}
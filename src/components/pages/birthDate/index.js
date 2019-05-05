import React from "react";
import PictureLayout from "../../layouts/pictureLayout";
import BirthDateBg from "../../../assets/images/background/birthDate_bg.jpg";

import "./birthDate.scss";
import {getMySelf, saveMyBirthDate} from "../../../model/storage";
import {EnumRotas} from "../../../model/types";
import {padStart} from "../../../model/utils";
import {changeRoute} from "../../../model/constants";

export default class BirthDate extends React.Component{
    state = {
        date: {
            day: 1,
            month: 5,
            year: 1991
        }
    };
    
    componentWillMount() {
        const birthDate = new Date(getMySelf().birthDate);
        let {date} = this.state;
        
        date.day = birthDate.getDate();
        date.month = birthDate.getMonth() + 1;
        date.year = birthDate.getFullYear();
        
        this.setState({date});
    }
    
    handleChange = prop => e => {
        const value = parseInt(e.target.value, 10);
        
        let date = Object.assign({}, this.state.date);
        date[prop] = value;
        
        const {day, month, year} = date;

        if(day > 31 || month > 12 || day < 0 || month < 0)
            return;


        const isSubmit = e.key === "Enter";
        saveMyBirthDate(new Date(year, month - 1, day));
        this.setState({date}, () => {
            if(!isSubmit)
                return;
            
            changeRoute(this.props, EnumRotas.YourName);
        });        
    };
    
    
    render = () => {
        const {day, month, year} = this.state.date;
        const l = val => padStart(val.toString(), 2);
        return(
            <PictureLayout className="birthDate" bgImage={BirthDateBg} colorLayer="blue" nextPage={EnumRotas.PressPlay}>
                <span>Qual é a sua <br/> data de nascimento?</span>
                <div className="form">
                    <input type="number" value={l(day)} onKeyUp={this.handleChange("day")} onChange={this.handleChange("day")} />
                    <span className="slash" />
                    <input type="number" value={l(month)} onKeyUp={this.handleChange("month")} onChange={this.handleChange("month")} />
                    <span className="slash" />
                    <input type="number" value={year} onKeyUp={this.handleChange("year")} onChange={this.handleChange("year")} />
                </div>
            </PictureLayout>
        )
    }
}

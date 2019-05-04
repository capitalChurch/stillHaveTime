import React from "react";
import PictureLayout from "../../layouts/pictureLayout";
import BirthDateBg from "../../../assets/images/background/birthDate_bg.png";

import "./birthDate.scss";
import {getMySelf, saveMyBirthDate} from "../../../model/storage";
import {EnumRotas} from "../../../model/types";

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

        saveMyBirthDate(new Date(year, month - 1, day));
        this.setState({date});
    };
    
    render = () => {
        const {day, month, year} = this.state.date;
        const l = val => val.toString();
        return(
            <PictureLayout className="birthDate" bgImage={BirthDateBg} colorLayer="blue" nextPage={EnumRotas.YourName}>
                <span>Qual é a sua <br/> data de nascimento?</span>
                <div className="form">
                    <input type="number" value={l(day)} onChange={this.handleChange("day")} />
                    <span className="slash" />
                    <input type="number" value={l(month)} onChange={this.handleChange("month")} />
                    <span className="slash" />
                    <input type="number" value={year} onChange={this.handleChange("year")} />
                </div>
            </PictureLayout>
        )
    }
}

if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength, padString) {
        targetLength = targetLength >> 0; //truncate if number, or convert non-number to 0;
        padString = String(typeof padString !== 'undefined' ? padString : ' ');
        if (this.length >= targetLength) {
            return String(this);
        } else {
            targetLength = targetLength - this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
            }
            return padString.slice(0, targetLength) + String(this);
        }
    };
}
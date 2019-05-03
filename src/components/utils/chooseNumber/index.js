import React from 'react';
import {ReactComponent as Arrow} from "../../../assets/images/arrow.svg";

import "./chooseNumber.scss";

export default class ChooseNumber extends React.Component{

    renderItem = i => {
        const {value, changeNumber, qtyChange} = this.props;
        let qtyToChange = qtyChange || 10;
        
        const style = Math.floor(value/qtyToChange) === i + 1 ? "active" : "";
        
        const fixValue = (i+1) * qtyToChange;
        const newValue = !!qtyChange ? fixValue : (value % qtyToChange) + fixValue;
        
        return <span className={style} onClick={() => changeNumber(newValue)}/>;
    };
    
    render = () => {
        const items = Array.from({length: 10}, (x, i) => i);
        const style = `${this.props.color} arrow`;
        return(
            <div className="chooseNumber">
                <Arrow className={`${style} arrowLeft`} onClick={() => this.props.changeNumber(this.props.value-1)}/>
                <div className="barDates">
                    {items.map(this.renderItem)}
                </div>
                <Arrow className={`${style} arrowRight`} onClick={() => this.props.changeNumber(this.props.value+1)}/>
            </div>
        )
    }
}
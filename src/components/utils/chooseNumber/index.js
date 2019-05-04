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
        const {qtyChange, limit, value} = this.props;
        const length = !!limit ? Math.floor(limit / qtyChange) : 10;
        
        const items = Array.from({ length }, (x, i) => i);
        
        const minusArrowDisabled = value === 0;
        const maxArrowDisabled = !!limit && value === limit;
        
        const style = `${this.props.color} arrow`;
        const styleLeft = `${style} ${minusArrowDisabled ? "disabled" : ""} arrowLeft`;
        const styleRight = `${style} ${maxArrowDisabled ? "disabled" : ""} arrowRight`;
        return(
            <div className="chooseNumber">
                <Arrow className={styleLeft} onClick={() => !minusArrowDisabled && this.props.changeNumber(this.props.value-1)}/>
                <div className="barDates">
                    {items.map(this.renderItem)}
                </div>
                <Arrow className={styleRight} onClick={() => !maxArrowDisabled && this.props.changeNumber(this.props.value+1)}/>
            </div>
        )
    }
}
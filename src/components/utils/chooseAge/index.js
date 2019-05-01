import React from 'react';
import {ReactComponent as Arrow} from "../../../assets/images/arrow.svg";

import "./chooseAge.scss";

export default class ChooseAge extends React.Component{

    renderItem = i => {
        const style = Math.floor(this.props.value/10) === i + 1 ? "active" : "";
        const newValue = (this.props.value % 10) + ((i+1) * 10);
        return <span className={style} onClick={() => this.props.changeAge(newValue)}/>;
    };
    
    render = () => {
        const items = Array.from({length: 10}, (x, i) => i);
        const style = `${this.props.color} arrow`;
        return(
            <div className="chooseAge">
                <Arrow className={`${style} arrowLeft`} onClick={() => this.props.changeAge(this.props.value-1)}/>
                <div className="barDates">
                    {items.map(this.renderItem)}
                </div>
                <Arrow className={`${style} arrowRight`} onClick={() => this.props.changeAge(this.props.value+1)}/>
            </div>
        )
    }
}
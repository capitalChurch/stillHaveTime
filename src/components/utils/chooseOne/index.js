import React, {Component, Fragment} from "react";
import {ReactComponent as Arrow} from "../../../assets/images/arrow.svg";

import "./chooseOne.scss";

export default class ChooseOne extends React.Component {
    render = () => {
        const {itens, choosen} = this.props;
        const positionChosen = itens.indexOf(choosen);
        const first = positionChosen !== 0 && itens[positionChosen - 1];
        const last = positionChosen !== itens.length - 1 && itens[positionChosen + 1];
        
        return (
            <div className="chooseOne">
                <div className="firstLine" onClick={() => first && this.props.onChange(first)}>
                    {first && (
                        <Fragment>
                            <Arrow className="arrow arrowUp" />
                            
                            <div className="wrapperText">
                                <span>{first}</span>
                            </div>
                        </Fragment>
                    )}
                </div>
                <div className="secondLine">
                    <span className="full">{choosen}</span>
                </div>
                {last && (
                <div className="thirdLine" onClick={() => this.props.onChange(last)}>
                    <Arrow className="arrow arrowDown" />
                    <span>{last}</span>
                </div>
                )}
            </div>
        )
    }
}
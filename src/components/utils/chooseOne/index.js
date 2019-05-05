import React, {Component, Fragment} from "react";
import {ReactComponent as Arrow} from "../../../assets/images/arrow.svg";

import "./chooseOne.scss";

export default class ChooseOne extends Component {
    render = () => {
        const {itens, choosen, disabled} = this.props;
        const positionChosen = itens.indexOf(choosen);
        const first = positionChosen !== 0 && itens[positionChosen - 1];
        const last = positionChosen !== itens.length - 1 && itens[positionChosen + 1];
        
        const styleWrapper = `chooseOne ${disabled ? "disabled" : ""}`;
        
        return (
            <div className={styleWrapper}>
                <div className="firstLine" onClick={() => !disabled && first && this.props.onChange(first)}>
                    {first && (
                        <Fragment>
                            <Arrow className="arrow arrowUp" />
                            
                            <div className="wrapperText">
                                <span>{first}</span>
                            </div>
                        </Fragment>
                    )}
                </div>
                <div className="secondLine" onClick={() => this.props.onClickChoosen(choosen)}>
                    <span className="full">{choosen}</span>
                </div>
                {last && (
                <div className="thirdLine" onClick={() => !disabled && this.props.onChange(last)}>
                    <Arrow className="arrow arrowDown" />
                    <span>{last}</span>
                </div>
                )}
            </div>
        )
    }
}
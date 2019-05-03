import React from "react";
import PictureLayout from "../../layouts/pictureLayout";
import Background from "../../../assets/images/background/vezesquesevem_color_bg.png";
import ChooseNumber from "../../utils/chooseNumber";

import "./timesSeenEachOther.scss";

const timesOptions = [
    {id: 1, label: "semana", limit: 7, qtyChange: 1 },
    {id: 2, label: "mês", limit: 30, qtyChange: 3 },
    {id: 3, label: "ano", qtyChange: 4 },
];

export default class RegularTimeTogether extends React.Component{
    state = {
        regularTimeTogether: 24,
        idTimes: 2
    };

    changeTimeTogether = hours => this.setState({regularTimeTogether: hours});

    renderItem = (opt, i) => {
        const style = opt.id === this.state.idTimes ? "active" : "";
        
        const click = () => {
            const { regularTimeTogether } = this.state;
            
            const numberTimes = regularTimeTogether >= opt.limit ? opt.limit : regularTimeTogether;
            this.setState({ idTimes: opt.id, regularTimeTogether: numberTimes });
        };
        
        return ( <span className={style} onClick={click}>{opt.label}</span> );
    };
    
    render = () => {
        const opt = timesOptions.find(x => x.id === this.state.idTimes);
        return (
            <PictureLayout className="timesSeenEachOther" colorLayer="yellow" bgImage={Background}>
                <div className="firstColumn">
                    <span className="firstLine">Além das férias,</span>
                    <span className="secondLine">quantas vezes se veem?</span>
                </div>
                <div className="secondColumn">
                    <span className="numberTimes">{this.state.regularTimeTogether} <small>x</small></span>
                    <ChooseNumber changeNumber={this.changeTimeTogether} value={this.state.regularTimeTogether} color="blue"
                                  qtyChange={opt.qtyChange} limit={opt.limit}/>
                    <div className="barOptions">
                        {timesOptions.map(this.renderItem)}
                    </div>
                </div>
            </PictureLayout>
        )
    }
}
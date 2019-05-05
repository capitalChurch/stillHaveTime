import React from "react";
import PictureLayout from "../../layouts/pictureLayout";
import Background from "../../../assets/images/background/vezesquesevem_color_bg.jpg";
import ChooseNumber from "../../utils/chooseNumber";
import {timesOptions} from "../../../model/constants";

import "./timesSeenEachOther.scss";
import {getTimeSpend, saveRegularTime, saveTimesPerEachEncounter} from "../../../model/storage";
import {EnumRotas} from "../../../model/types";


export default class RegularTimeTogether extends React.Component{
    state = {
        regularTimeTogether: 24,
        idTimes: 2
    };
    
    componentWillMount = () => {
        const {timesPerEachEncounter, regularTime} = getTimeSpend();

        this.setState({idTimes: regularTime, regularTimeTogether: timesPerEachEncounter});
    };

    changeTimeTogether = hours => this.setState({regularTimeTogether: hours}, () => saveTimesPerEachEncounter(hours));

    renderItem = (opt, i) => {
        const style = opt.type === this.state.idTimes ? "active" : "";
        
        const click = () => {
            const { regularTimeTogether } = this.state;
            
            const numberTimes = (regularTimeTogether < opt.limit || !opt.limit) ? regularTimeTogether : opt.limit ;
            this.setState({ idTimes: opt.type, regularTimeTogether: numberTimes }, () => {
                saveRegularTime(opt.type);
                saveTimesPerEachEncounter(numberTimes);
            });
        };
        
        return ( <span className={style} onClick={click}>{opt.label}</span> );
    };
    
    render = () => {
        const opt = timesOptions.find(x => x.type === this.state.idTimes);
        const hasVacation = !!getTimeSpend().hasVacation;
        return (
            <PictureLayout className="timesSeenEachOther" colorLayer="yellow" bgImage={Background} nextPage={EnumRotas.RegularTimeTogether}>
                <div className="firstColumn">
                    {hasVacation && (<span className="firstLine">Além das férias,</span>)}
                    <span className="secondLine">{hasVacation ? "q" : "Q" }uantas vezes se veem?</span>
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
import React from "react";
import PictureLayout from "../../layouts/pictureLayout";
import Background from "../../../assets/images/background/vezesquesevem_color_bg.png";
import ChooseNumber from "../../utils/chooseNumber";
import {timesOptions} from "../../../model/constants";

import "./timesSeenEachOther.scss";
import {getTimeSpend, saveRegularTime, saveTimesPerEachEncounter} from "../../../model/storage";


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
            
            const numberTimes = regularTimeTogether >= opt.limit ? opt.limit : regularTimeTogether;
            this.setState({ idTimes: opt.type, regularTimeTogether: numberTimes }, () => {
                saveRegularTime(opt.type);
                saveTimesPerEachEncounter(regularTimeTogether);
            });
        };
        
        return ( <span className={style} onClick={click}>{opt.label}</span> );
    };
    
    render = () => {
        const opt = timesOptions.find(x => x.type === this.state.idTimes);
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
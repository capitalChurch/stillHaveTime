import React from "react";
import PictureLayout from "../../layouts/pictureLayout";
import Background from "../../../assets/images/background/vezesquesevem_color_bg.png";
import ChooseNumber from "../../utils/chooseNumber";

import "./timeVacationTogether.scss";
import {getTimeSpend, saveDaysVacation} from "../../../model/storage";
import {EnumRotas} from "../../../model/types";

export default class TimeVacationTogether extends React.Component{
    state = {
        vacationTimeTogether: 6    
    };
    
    componentWillMount = () => this.setState({vacationTimeTogether: getTimeSpend().daysInVacation});

    changeTime = days => this.setState({vacationTimeTogether: days}, () => saveDaysVacation(days));
    
    render = () => {
        return (
            <PictureLayout className="timeVacationTogether" bgImage={Background} colorLayer="yellow" nextPage={EnumRotas.TimesSeenEachOther}>
                <span className="labelTitle">Vocês passam as férias juntos?</span>
                <div className="firstColumn">
                    <span className="title">Quantos dias ao ano?</span>
                </div>
                <div className="secondColumn">
                    <span className="numberTimeVacation">{this.state.vacationTimeTogether}</span>
                    <ChooseNumber value={this.state.vacationTimeTogether} changeNumber={this.changeTime} qtyChange={3} color="blue" />
                </div>
            </PictureLayout>
        )
    }
}

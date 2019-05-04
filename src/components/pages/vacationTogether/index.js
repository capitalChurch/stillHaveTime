import React from "react";
import PictureLayer from "../../layouts/pictureLayout";

import Background from "../../../assets/images/background/ferias_color_bg.png";
import "./vacationTogether.scss";
import {getMyRelation, getRelation, saveHasVacation} from "../../../model/storage";
import {changeRoute, typesRelations} from "../../../model/constants";
import {EnumRotas} from "../../../model/types";
import {formatBeautiful} from "../../../model/utils";

export default class VacationTogether extends React.Component{
    
    handleChangeOption = hasVacation => {
        saveHasVacation(hasVacation);
        changeRoute(this.props, hasVacation ? EnumRotas.TimeVacationTogether : EnumRotas.TimesSeenEachOther);
    };
    
    render = () => {
        const {name, age, city} = getMyRelation();
        
        const relation = typesRelations.find(x => x.type === getRelation());
        const labelRelation = relation.label;

        const relationSuperior = typesRelations.find(x => x.type === relation.typeSuperior);
        const labelSuperiorRelation = relationSuperior && relationSuperior.label;
        
        return (
            <PictureLayer className="vacationTogether" colorLayer="yellow" bgImage={Background}>
                <div className="firstColumn">
                    <span className="title">Vocês passam <br /> as férias juntos?</span>
                    <div className="itens">
                        <span className="item">{formatBeautiful(name)}</span>
                        <span className="item">{age}</span>
                        <span className="item">{formatBeautiful(city)}</span>
                        {labelSuperiorRelation && (<span className="item">{labelSuperiorRelation}</span>)}
                        <span className="item">{labelRelation}</span>
                    </div>
                </div>
                <div className="secondColumn">
                    <span className="yesOption" onClick={() => this.handleChangeOption(true)}>Sim</span>
                    <span className="noOption" onClick={() => this.handleChangeOption(false)}>Não</span>
                </div>
            </PictureLayer>
        )
    }
}
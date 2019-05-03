import React from "react";
import PictureLayout from "../../layouts/pictureLayout";
import ChooseOne from "../../utils/chooseOne";
import Background from "../../../assets/images/background/relacao_familia_color_bg.png";
import * as constants from "../../../model/constants";
import {EnumRelation} from "../../../model/types";

import "./familiaRelation.scss";
import {getMySelf, getRelation, saveRelation} from "../../../model/storage";


export default class FamiliaRelation extends React.Component{
    state = {
        typeRelation: null
    };
    
    componentWillMount() {
        this.setState({typeRelation: getRelation()})
    }

    chooseRelation = typeRelation => saveRelation(typeRelation);
    
    renderRelate = (opt, i) => {
        const style = opt.type === this.state.typeRelation ? "active" : "";
        
        const choose = () => this.setState({typeRelation: opt.type}, () => this.chooseRelation(opt.type));
        
        return (
            <span key={i} onClick={choose} className={style}>{opt.label}</span>
        );
    };
    
    render = () => {
        const allTypes = constants.typesRelations;
        
        const itens = allTypes.filter(x => x.typeSuperior == null).map(x => x.label);
        const choosen = allTypes.find(x => x.type === EnumRelation.familia);
        
        const relates = allTypes.filter(x => x.typeSuperior === EnumRelation.familia);
        return (
            <PictureLayout className="familiarRelation" colorLayer="yellow" bgImage={Background}>
                <div className="title">Qual é a relação que você tem com essa pessoa?</div>
                <ChooseOne itens={itens} choosen={choosen.label} disabled={true} />
                <div className="options">
                    {relates.map(this.renderRelate)}
                </div>
            </PictureLayout>
        )
    }
}
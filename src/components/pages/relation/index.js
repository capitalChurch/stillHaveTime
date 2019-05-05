import React from "react";
import PictureLayout from "../../layouts/pictureLayout";
import Background from "../../../assets/images/background/ferias_color_bg.jpg";
import ChooseOne from "../../utils/chooseOne";
import {getMyRelation, getRelation, saveRelation} from "../../../model/storage";
import {changeRoute, typesRelations} from "../../../model/constants";
import {EnumRotas} from "../../../model/types";
import {formatBeautiful} from "../../../model/utils";

import "./relation.scss";

export default class Relation extends React.Component{
    state = {
        relation: 0
    };
    
    componentWillMount = () => this.setState({relation: getRelation() });

    changeRelation = (callback = () => {}) => relation => {
        const relationType = typesRelations.find(x => x.label === relation).type
        this.setState({relation: relationType}, () => {
            saveRelation(relationType);
            callback();
        });
    };
    
    render = () => {
        const {name, city, age} = getMyRelation();
        
        const tpRelations = typesRelations.filter(x => x.typeSuperior === null);
        const labelsTypesRelations = tpRelations.map(x => x.label);
        
        const relationChoosen = typesRelations.find(x => x.type === this.state.relation);
        const choosen = tpRelations.find(x => x.type === relationChoosen.type || x.type === relationChoosen.typeSuperior);
        
        const hasChildren = !!typesRelations.find(x => x.typeSuperior === choosen.type);
        const nextPage = hasChildren ? EnumRotas.FamiliarRelation : EnumRotas.VacationTogether;
        const handleSubmit = this.changeRelation(() => changeRoute(this.props, nextPage));
            
        return (
            <PictureLayout className="relation" colorLayer="yellow" bgImage={Background} nextPage={nextPage}>
                <div className="firstColumn">
                    <span className="title">Qual é a relação<br/>que você tem<br />com essa pessoa?</span>
                    <div className="itens">
                        <span className="item">{formatBeautiful(name)}</span>
                        <span className="item">{age}</span>
                        <span className="item">{formatBeautiful(city)}</span>
                    </div>
                </div>
                <div className="secondColumn">
                    <ChooseOne itens={labelsTypesRelations} choosen={choosen.label} onChange={this.changeRelation()} onClickChoosen={handleSubmit}/>
                </div>
            </PictureLayout>
        )
    }
}
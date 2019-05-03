import React from "react";
import PictureLayout from "../../layouts/pictureLayout";
import Background from "../../../assets/images/background/ferias_color_bg.png";
import ChooseOne from "../../utils/chooseOne";

import "./relation.scss";
import {getMyRelation, getRelation, saveRelation} from "../../../model/storage";
import {typesRelations} from "../../../model/constants";

export default class Relation extends React.Component{
    state = {
        relation: 0
    };
    
    componentWillMount = () => this.setState({relation: getRelation() });

    changeRelation = relation => {
        const relationType = typesRelations.find(x => x.label === relation).type
        this.setState({relation: relationType}, () => saveRelation(relationType));
    };
    
    render = () => {
        const {name, city, age} = getMyRelation();
        
        const tpRelations = typesRelations.filter(x => x.typeSuperior === null);
        const labelsTypesRelations = tpRelations.map(x => x.label);
        
        const relationChoosen = typesRelations.find(x => x.type === this.state.relation);
        const labelChoosen = tpRelations.find(x => x.type === relationChoosen.type || x.type === relationChoosen.typeSuperior).label;
        
        console.log(tpRelations);
        
        return (
            <PictureLayout className="relation" colorLayer="yellow" bgImage={Background} >
                <div className="firstColumn">
                    <span className="title">Qual é a relação<br/>que você tem<br />com essa pessoa?</span>
                    <div className="itens">
                        <span className="item">{name}</span>
                        <span className="item">{age}</span>
                        <span className="item">{city}</span>
                    </div>
                </div>
                <div className="secondColumn">
                    <ChooseOne itens={labelsTypesRelations} choosen={labelChoosen} onChange={this.changeRelation}/>
                </div>
            </PictureLayout>
        )
    }
}
import React from "react";
import PictureLayout from "../../layouts/pictureLayout";
import Background from "../../../assets/images/background/ferias_color_bg.png";
import ChooseOne from "../../utils/chooseOne";

import "./relation.scss";

export default class Relation extends React.Component{
    state = {
        relation: "Amizade"
    };
    
    changeRelation = relation => this.setState({relation});
    
    render = () => {
        const typesRelations = ["Casal", "Amizade", "Familia"];
        return (
            <PictureLayout className="relation" colorLayer="yellow" bgImage={Background} >
                <div className="firstColumn">
                    <span className="title">Qual é a relação<br/>que você tem<br />com essa pessoa?</span>
                    <div className="itens">
                        <span className="item">João Paulo</span>
                        <span className="item">28</span>
                        <span className="item">Brasília</span>
                    </div>
                </div>
                <div className="secondColumn">
                    <ChooseOne itens={typesRelations} choosen={this.state.relation} onChange={this.changeRelation}/>
                </div>
            </PictureLayout>
        )
    }
}
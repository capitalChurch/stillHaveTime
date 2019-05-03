import React from "react";
import PictureLayout from "../../layouts/pictureLayout";
import ChooseOne from "../../utils/chooseOne";
import Background from "../../../assets/images/background/relacao_familia_color_bg.png";

import "./familiaRelation.scss";


export default class FamiliaRelation extends React.Component{
    state = {
        typeRelation: "Irmão(a)"
    };
    
    chooseRelation = typeRelation => this.setState({typeRelation});
    
    renderRelate = (opt, i) => {
        const style = opt === this.state.typeRelation ? "active" : "";
        const choose = () => this.chooseRelation(opt);
        return (
            <span key={i} onClick={choose} className={style}>{opt}</span>
        );
    };
    
    render = () => {
        const itens = ["Amizade", "Família"];
        const relates = [
            "Mãe", "Pai", "Filho(a)", "Irmão(a)", "Neto(a)", "Avó/Avô", "Tio(a)", "Sobrinho(a)",
            "Sogro(a)", "Cunhado(a)", "Genro/Nora"
        ];
        return (
            <PictureLayout className="familiarRelation" colorLayer="yellow" bgImage={Background}>
                <div className="title">Qual é a relação que você tem com essa pessoa?</div>
                <ChooseOne itens={itens} choosen={itens[1]} disabled={true} />
                <div className="options">
                    {relates.map(this.renderRelate)}
                </div>
            </PictureLayout>
        )
    }
}
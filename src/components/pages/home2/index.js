import React, {Component, Fragment} from "react";
import Logo from "../../utils/logo";
import LogoChurch from "../../utils/logoChurch";
import {ReactComponent as Arrow} from "../../../assets/images/arrow.svg";

import "./home2.scss";
import {EnumRotas} from "../../../model/types";
import {changeRoute} from "../../../model/constants";

export default class Home2 extends Component {
    goesHome = () => changeRoute(this.props, EnumRotas.Home);
    render = () => {
        return (
            <Fragment>
                <div className="yellowBar" />
                <div className="home2">
                    <div className="topBar">
                        <LogoChurch />
                        <div className="btnVoltar" onClick={this.goesHome}>
                            <span>voltar</span>
                            <Arrow />
                        </div>
                        <div className="square" />
                    </div>
                    <div className="body">
                        <span className="title">O tempo<br />está passando...</span>
                        <p>O site Ainda dá tempo tem o objetivo de despertar a sua consciência para o fato de que existem pessoas ao redor que ainda não conhecem o amor de Jesus.</p>
                        <p>Quanto tempo você ainda tem para mudar essa realidade? O que você tem feito em seu tempo de convivência com aqueles que ama? E se Jesus voltar amanhã?</p>
                        <p>Ainda dá tempo!</p>
                        <p>*O tempo estimado é baseado em um cálculo que envolve idade de sobrevida previamente definida e as idades informadas pelo usuário, podendo ser a da pessoa escolhida ou a dele mesmo.</p>
                    </div>
                    <div className="footer">
                        <div className="square" />
                        <Logo/>
                    </div>
                </div>
            </Fragment>
        )
    }
}
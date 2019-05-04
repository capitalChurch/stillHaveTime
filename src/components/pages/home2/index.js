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
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
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
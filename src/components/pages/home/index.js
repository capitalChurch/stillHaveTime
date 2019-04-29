import React from "react";
import BasicLayout from "../../layouts/basicLayout";
import {ReactComponent as Logo} from "../../../assets/images/logo.svg";
import {ReactComponent as Arrow} from "../../../assets/images/arrow.svg";
import "./home.scss";

export default function(props){
    return (
        <BasicLayout className="home">
            <div className="gatinho"/>
            <div className="information">
                <div className="logo">
                    <Logo />
                </div>
                <div className="text">
                    <p>Quanto tempo você ainda tem para compartilhar do amor de Jesus com a pessoa que ama?</p>
                    <span className="actionButton">
                        Clique aqui e descubra
                    </span>
                </div>                
            </div>
            <div className="moreInfo">
                <span className="label">Mais informações</span>
                <span className="arrow"><Arrow/></span>
            </div>
        </BasicLayout>
    )
}
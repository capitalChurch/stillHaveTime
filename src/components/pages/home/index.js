import React from "react";
import BasicLayout from "../../layouts/basicLayout";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import { ReactComponent as Arrow } from "../../../assets/images/arrow.svg";
import "./home.scss";
import { changeRoute } from "../../../model/constants";
import { EnumRotas } from "../../../model/types";
import {initializeStorage} from "../../../model/storage";

export default function(props){
    
    const goToHome2 = () => changeRoute(props, EnumRotas.Home2);
    const goToBirthDate = () => initializeStorage(() => changeRoute(props, EnumRotas.BirthDate));
    
    return (
        <BasicLayout className="home">
            <div className="gatinho"/>
            <div className="information">
                <div className="logo">
                    <Logo />
                </div>
                <div className="text">
                    <p>Quanto tempo você ainda tem para compartilhar do amor de Jesus com a pessoa que ama?</p>
                    <span className="actionButton" onClick={ goToBirthDate }>
                        Clique aqui e descubra
                    </span>
                </div>                
            </div>
            <div className="moreInfo" onClick={ goToHome2 }>
                <div className="buttonMoreInfo">
                    <span className="label">Mais informações</span>
                    <span className="arrow"><Arrow/></span>
                </div>
            </div>
        </BasicLayout>
    );
}
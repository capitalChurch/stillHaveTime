import React from "react";
import CleanLayout from "../../layouts/cleanLayout";

import "./shareResult.scss";
import {changeRoute} from "../../../model/constants";
import {EnumRotas} from "../../../model/types";

export default function(props){
    const onClick = () => changeRoute(props, EnumRotas.ShareResult2);
    return (
        <CleanLayout className="shareResult">
            <p>Ainda< br/><span className="accent">da</span> Tempo!</p>
            <span className="label" onClick={onClick}>compartilhar resultado</span>
        </CleanLayout>
    )
}
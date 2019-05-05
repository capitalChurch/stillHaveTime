import React from "react";
import CleanLayout from "../../layouts/cleanLayout";
import "./backOfJesus.scss";
import {EnumRotas} from "../../../model/types";

export default function(props){
    return (
        <CleanLayout className="backOfJesus" nextPage={EnumRotas.ShareResult}>
            <span>mas e se jesus</span>
            <span className="accent">voltar hoje?</span>
            <span>o que você</span>
            <span>tem feito</span>
        </CleanLayout>
    )
}
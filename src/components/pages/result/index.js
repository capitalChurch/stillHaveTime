import React from "react";
import CleanLayout from "../../layouts/cleanLayout";
import "./result.scss";
import {getMyRelation, getMySelf} from "../../../model/storage";

export default function(props){
    const myName = getMySelf().name;
    const hisName = getMyRelation().name;
    return (
        
        <CleanLayout className="result">
            <h1>{myName}</h1>
            <h1 className="accent">E</h1>
            <h1>{hisName}.</h1>
        </CleanLayout>
    )
}
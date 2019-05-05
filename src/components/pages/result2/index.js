import React from "react";
import CleanLayout from "../../layouts/cleanLayout";

import "./result2.scss";
import {getMyRelation, getMySelf} from "../../../model/storage";
import ResultCalc from "../../../model/calculate";
import {formatBeautiful} from "../../../model/utils";
import {EnumRotas} from "../../../model/types";


export default function(props){
    const myName = getMySelf().name;
    const hisName = getMyRelation().name;
    
    const { years, months, days, hours, labelYear, labelMonth, labelDay, labelHour } = ResultCalc();

    const showYears = !!years;
    
    return(
        <CleanLayout className="result2">
            <div className="wrapperResult2">
                <p>{formatBeautiful(myName)}, se continuar tendo o mesmo tempo de relacionamento que tem com {formatBeautiful(hisName)} hoje, você terá</p>
                <div className="resultBar">
                    {showYears && [
                        <span key={1}>{years}{labelYear}</span>,
                        <div key={2} className="divider" />
                    ]}
                    
                    <span>{months} {labelMonth}</span>
                    <div className="divider" />
                    <span>{days} {labelDay}</span>

                    {!showYears && [
                        <div key={1} className="divider" />,
                        <span key={2}>{hours} {labelHour}</span>
                    ]}
                </div>
                <p>para mostrar o amor de Jesus.</p>
            </div>
        </CleanLayout>
    )
}
import React from "react";
import CleanLayout from "../../layouts/cleanLayout";
import "./shareResult2.scss";
import {getMyRelation, getMySelf} from "../../../model/storage";
import resultCalc from "../../../model/calculate";

export default function(props){
    const myName = getMySelf().name;
    const hisName = getMyRelation().name;
    const {years, months, days, hours, labelYear, labelMonth, labelDay, labelHour} = resultCalc();
    return (
        <CleanLayout className="shareResult2">
            <div className="body">
                <div className="text">
                    <span className="title">{myName} <span className="accent">e</span><br />{hisName}</span>
                    <span className="bodyText">It is a long established fact that a reader will be distracted by of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</span>
                </div>
                <div className="wrapperScore">
                    <div className="score">
                        {!!years && (
                        <span>{years}{labelYear}</span>
                        )}
                        <span>{months}{!!years ? " " : ""}{labelMonth}</span>
                        <span>{days} {labelDay}</span>
                        {!years && (
                            <span>{hours} {labelHour}</span>
                        )}
                    </div>
                </div>
            </div>
            <div className="buttonBar">
                <span>facebook</span>
                <span>E-mail</span>
                <span>Whatsapp</span>
            </div>
        </CleanLayout>
    )
}
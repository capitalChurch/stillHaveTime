import React from "react";
import CleanLayout from "../../layouts/cleanLayout";
import "./shareResult2.scss";

export default function(props){
    return (
        <CleanLayout className="shareResult2">
            <div className="body">
                <div className="text">
                    <span className="title">João <span className="accent">e</span><br />Anna</span>
                    <span className="bodyText">It is a long established fact that a reader will be distracted by of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</span>
                </div>
                <div className="wrapperScore">
                    <div className="score">
                        <span>6Anos</span>
                        <span>3 meses</span>
                        <span>8 dias</span>
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
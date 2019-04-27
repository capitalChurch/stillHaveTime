import React from "react";
import CleanLayout from "../../layouts/cleanLayout";

import "./shareResult.scss";

export default function(props){
    return (
        <CleanLayout className="shareResult">
            <p>Ainda< br/><span className="accent">da</span> Tempo!</p>
            <span className="label">compartilhar resultado</span>
        </CleanLayout>
    )
}
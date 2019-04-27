import React from "react";
import CleanLayout from "../../layouts/cleanLayout";

import "./result2.scss";


export default function(props){
    return(
        <CleanLayout className="result2">
            <p>
                João, se continuar tendo<br/>
                o mesmo tempo de relacionamento<br/>
                que tem com o João hoje, você terá
            </p>
            <div className="resultBar">
                <span>6anos</span>
                <span>3 meses</span>
                <span>8 dias</span>
            </div>
            <p>para mostrar o amor de Jesus a ele.</p>
        </CleanLayout>
    )
}
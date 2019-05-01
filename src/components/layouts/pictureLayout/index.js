import React from "react";
import CleanLayout from "../cleanLayout";

import "./pictureLayout.scss";

export default function(props){
    var layoutStyle = {
        backgroundImage: `url(${props.bgImage})`
    };
    
    return(
        <CleanLayout className={`${props.className} pictureLayout`} style={ layoutStyle }>
            <div className={`${props.colorLayer} gatinho`} />
            <div className={`${props.colorLayer} bodyLayout`} >
                {props.children}    
            </div>
        </CleanLayout>
    )
}

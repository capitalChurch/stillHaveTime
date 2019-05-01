import React from "react";
import CleanLayout from "../cleanLayout";

import "./pictureLayout.scss";

export default function(props){
    var layoutStyle = {
        backgroundImage: `url(${props.bgImage})`
    };
    
    return(
        <CleanLayout className={`${props.className} pictureLayout`} style={ layoutStyle } color={props.colorLayer}>
            <div className={`${props.colorLayer} gatinho`} />
            <div className={`${props.colorLayer} bodyLayoutPicture`} >
                {props.children}    
            </div>
        </CleanLayout>
    )
}

import React from "react";
import CleanLayout from "../cleanLayout";

import "./pictureLayout.scss";

export default function(props){
    const layoutStyle = {
        backgroundImage: `url(${props.bgImage})`
    };
    
    return(
        <CleanLayout className={`${props.className} pictureLayout`} style={ layoutStyle } color={props.colorLayer} nextPage={props.nextPage}>
            <div className={`${props.colorLayer} gatinho`} />
            <div className={`${props.colorLayer} bodyLayoutPicture`} >
                {props.children}    
            </div>
        </CleanLayout>
    )
}

import React from "react";
import "./logoChurch.scss";
import { ReactComponent as LogoChurch} from "../../../assets/images/logoIgreja.svg";

export default function(props){
    const color = props.color || "blue";
    return <LogoChurch className={`${color} logoChurch`} />
}

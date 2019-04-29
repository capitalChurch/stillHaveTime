import React from "react";
import "./logo.scss";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";

export default function(props){
    const style = props.color || "blue";
    return <Logo className={`${style} logo`} />
}

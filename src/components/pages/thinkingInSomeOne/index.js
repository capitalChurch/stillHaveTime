import React, { Component, Fragment } from "react";
import CleanLayout from "../../layouts/cleanLayout";

import "./thinkingInSomeOne.scss";

export default class ThinkingInSomeOne extends Component{
    render = () => (
        <Fragment>
            <div className="gato" />
            <CleanLayout className="thinkingInSomeOne">
                <span>Agora pense em alguém que você ame e que precise conhecer do amor de Jesus</span>
            </CleanLayout>
        </Fragment>
    )
}
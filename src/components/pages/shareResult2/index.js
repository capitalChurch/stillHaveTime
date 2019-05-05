import React from "react";
import CleanLayout from "../../layouts/cleanLayout";
import "./shareResult2.scss";
import {getMyRelation, getMySelf} from "../../../model/storage";
import resultCalc from "../../../model/calculate";
import * as domToImage from "dom-to-image";
import {formatBeautiful} from "../../../model/utils";

export default class ShareResult2 extends React.Component{
    state = {
        showText: true
    };

    handleDownloadClick = () => this.setState({showText: false}, () => {
        const node = document.getElementById("root");

        domToImage.toBlob(node, { bgcolor: "white" })
            .then(dataUrl => {
                const url = window.URL.createObjectURL(dataUrl);
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `${formatBeautiful(getMySelf().name)} e ${formatBeautiful(getMyRelation().name)}.jpg`);
                document.body.appendChild(link);
                link.click();
                this.setState({showText: true});
            });
    });

    render = () => {
        const myName = getMySelf().name;
        const hisName = getMyRelation().name;
        const {years, months, days, hours, labelYear, labelMonth, labelDay, labelHour} = resultCalc();
        return (
            <CleanLayout className="shareResult2">
                <div className="body">
                    <div className="text">
                        <span className="title">{myName} <span className="accent">e</span><br />{hisName}</span>
                        {this.state.showText && (
                        <span className="bodyText">
                            <p>Você ainda tem tempo para falar do amor de Jesus pra quem você ama, mas Jesus pode voltar ainda hoje.</p>
                            <p>Otimize seu tempo e invista em amor, cuidado e conversas de qualidade.</p>
                            <p>Assuma sua responsabilidade. Que Deus te abennçoe!</p>
                        </span>
                        )}
                        {!this.state.showText && (
                            <span className="bodyText">
                                <p>Olha <b>{formatBeautiful(hisName)}</b>, se continuarmos assim esse é o tempo que ainda temos para compartilhar o melhor da vida.</p>
                            </span>
                        )}
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
                {this.state.showText && (
                    <div className="buttonBar">
                        <span onClick={this.handleDownloadClick}>Download</span>
                    </div>
                )}
            </CleanLayout>
        )
    }
}
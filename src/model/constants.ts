import {EnumRelation, EnumRotas, EnumTypeRegularTime, Rotas, TypesRegularTime, TypesRelation} from "./types";

import Home from "../components/pages/home";
import Home2 from "../components/pages/home2";
import WhatIfJesusComeBack from "../components/pages/backOfJesus";
import Result from "../components/pages/result";
import Result2 from "../components/pages/result2";
import ShareResult from "../components/pages/shareResult";
import ShareResult2 from "../components/pages/shareResult2";
import BirthDate from "../components/pages/birthDate";
import Info from "../components/pages/info";
import YourName from "../components/pages/yourName";
import YourAge from "../components/pages/yourAge";
import YourCity from "../components/pages/yourCity";
import HisAge from "../components/pages/hisAge";
import HisCity from "../components/pages/hisCity";
import HisName from "../components/pages/hisName";
import Relation from "../components/pages/relation";
import FamiliarRelation from "../components/pages/familiarRelation";
import VacationTogether from "../components/pages/vacationTogether";
import TimeVacationTogether from "../components/pages/timeVacationTogether";
import RegularTimeTogether from "../components/pages/regularTimeTogether";
import TimesSeenEachOther from "../components/pages/timesSeenEachOther";
import ThinkingInSomeOne from "../components/pages/thinkingInSomeOne";
import PressPlay from "../components/pages/pressPlay";
import Calculates from "../components/pages/calculates";


export const typesRelations: TypesRelation[] = [
    {type: EnumRelation.casal, typeSuperior: null, label: "Casal"},
    {type: EnumRelation.amizade, typeSuperior: null, label: "Amizade"},
    {type: EnumRelation.familia, typeSuperior: null, label: "Família"},
    {type: EnumRelation.mae, typeSuperior: EnumRelation.familia, label: "Mãe"},
    {type: EnumRelation.pai, typeSuperior: EnumRelation.familia, label: "Pai"},
    {type: EnumRelation.filho, typeSuperior: EnumRelation.familia, label: "Filho(a)"},
    {type: EnumRelation.irmao, typeSuperior: EnumRelation.familia, label: "Irmão(a)"},
    {type: EnumRelation.avo, typeSuperior: EnumRelation.familia, label: "Avó/Avô"},
    {type: EnumRelation.neto, typeSuperior: EnumRelation.familia, label: "Neto(a)"},
    {type: EnumRelation.tio, typeSuperior: EnumRelation.familia, label: "Tio(a)"},
    {type: EnumRelation.sobrinho, typeSuperior: EnumRelation.familia, label: "Sobrinho(a)"},
    {type: EnumRelation.sogro, typeSuperior: EnumRelation.familia, label: "Sogro(a)"},
    {type: EnumRelation.cunhado, typeSuperior: EnumRelation.familia, label: "Cunhado(a)"},
    {type: EnumRelation.genro, typeSuperior: EnumRelation.familia, label: "Genro/Nora"}
];

export const timesOptions: TypesRegularTime[] = [
    {type: EnumTypeRegularTime.semana, label: "semana", limit: 7, qtyChange: 1 },
    {type: EnumTypeRegularTime.mes, label: "mês", limit: 30, qtyChange: 3 },
    {type: EnumTypeRegularTime.ano, label: "ano", limit: null, qtyChange: 4 },
];

export const allRoutes: Rotas[] = [
    { type: EnumRotas.Home, path: "home", component: Home },
    { type: EnumRotas.Home2, path: "home2", component: Home2 },
    { type: EnumRotas.WhatIfJesusComeBack, path: "voltaJesus", component: WhatIfJesusComeBack },
    { type: EnumRotas.Result, path: "result", component: Result },
    { type: EnumRotas.Result2, path: "result2", component: Result2 },
    { type: EnumRotas.ShareResult, path: "shareResult", component: ShareResult },
    { type: EnumRotas.ShareResult2, path: "shareResult2", component: ShareResult2 },
    { type: EnumRotas.BirthDate, path: "birthDate", component: BirthDate },
    { type: EnumRotas.Info, path: "info", component: Info },
    { type: EnumRotas.YourName , path: "yourName", component: YourName  },
    { type: EnumRotas.YourAge, path: "yourAge", component: YourAge },
    { type: EnumRotas.YourCity, path: "yourCity", component: YourCity },
    { type: EnumRotas.HisAge, path: "hisAge", component: HisAge },
    { type: EnumRotas.HisCity, path: "hisCity", component: HisCity },
    { type: EnumRotas.HisName, path: "hisName", component: HisName },
    { type: EnumRotas.Relation, path: "relation", component: Relation },
    { type: EnumRotas.FamiliarRelation, path: "familiarRelation", component: FamiliarRelation },
    { type: EnumRotas.VacationTogether, path: "vacationTogether", component: VacationTogether },
    { type: EnumRotas.TimeVacationTogether, path: "timeVacationTogether", component: TimeVacationTogether },
    { type: EnumRotas.RegularTimeTogether, path: "regularTimeTogether", component: RegularTimeTogether },
    { type: EnumRotas.TimesSeenEachOther, path: "timesSeenEachOther", component: TimesSeenEachOther },
    { type: EnumRotas.ThinkingInSomeOne, path: "thinkingInSomeOne", component: ThinkingInSomeOne },
    //{ type: EnumRotas.PressPlay, path: "pressPlay", component: PressPlay },
    { type: EnumRotas.Calculates, path: "calculates", component: Calculates },
];

export const changeRoute: (props: any, type: EnumRotas) => void = (props, type) => {
    if(type === EnumRotas.Back)
        props.history.goBack();
    
    const path = (allRoutes.find(x => x.type === type) || {path: "/"}).path;
    props.history.push(path);
};

export const defaultRoute: EnumRotas = EnumRotas.Home;
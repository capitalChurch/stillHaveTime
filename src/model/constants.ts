import {Defaults, EnumRelation, EnumTypeRegularTime, TypesRelation} from "./types";

export const keyStorage = "youStillHaveTime";

export const typesRelations: TypesRelation[] = [
    {type: EnumRelation.casal, typeSuperior: null, label: "Casal"},
    {type: EnumRelation.amizade, typeSuperior: null, label: "Amizade"},
    {type: EnumRelation.familia, typeSuperior: null, label: "Família"},
    {type: EnumRelation.mae, typeSuperior: EnumRelation.familia, label: "Mãe"},
    {type: EnumRelation.pai, typeSuperior: EnumRelation.familia, label: "Pai"},
    {type: EnumRelation.filho, typeSuperior: EnumRelation.familia, label: "Filho(a)"},
    {type: EnumRelation.irmao, typeSuperior: EnumRelation.familia, label: "Irmão(a)"},
    {type: EnumRelation.neto, typeSuperior: EnumRelation.familia, label: "Avó/Avô"},
    {type: EnumRelation.tio, typeSuperior: EnumRelation.familia, label: "Tio(a)"},
    {type: EnumRelation.sobrinho, typeSuperior: EnumRelation.familia, label: "Sobrinho(a)"},
    {type: EnumRelation.sogro, typeSuperior: EnumRelation.familia, label: "Sogro(a)"},
    {type: EnumRelation.cunhado, typeSuperior: EnumRelation.familia, label: "Cunhado(a)"},
    {type: EnumRelation.genro, typeSuperior: EnumRelation.genro, label: "Genro/Nora"}
];

export const defaults: Defaults = {
    city: "Brasília",
    birthDate: new Date("1990-08-01"),
    daysInVacation: 12,
    regularTime: EnumTypeRegularTime.mes,
    timesPerEachEncounter: 6,
    age: 28,
    relation: EnumRelation.casal,
    hoursWhenTogether: 3
};

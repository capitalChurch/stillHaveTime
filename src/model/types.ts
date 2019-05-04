export interface TypesRegularTime{
    type: EnumTypeRegularTime;
    label: string;
    limit: number | null;
    qtyChange: number;
}

export enum EnumTypeRegularTime{
    semana, mes, ano
}

export interface TypesRelation{
    type: EnumRelation;
    typeSuperior: EnumRelation | null;
    label: string;
}

export enum EnumRelation{
    casal, amizade, familia, mae, pai, filho, irmao, neto, avo, tio, sobrinho, sogro, cunhado, genro
}

export interface Person{
    name: string;
    age: number;
    city: string;
    birthDate: Date;
}

export interface TimeRelation{
    hasVacation: boolean | null;
    daysInVacation: number;
    regularTime: EnumTypeRegularTime;
    timesPerEachEncounter: number;
    hoursWhenTogether: number;
}

export interface AllData{
    mySelf: Person;
    myRelation: Person;
    relation: EnumRelation;
    timesSpend: TimeRelation;
}

export interface Defaults {
    city: string;
    age: number;
    relation: EnumRelation;
    daysInVacation: number;
    regularTime: EnumTypeRegularTime;
    timesPerEachEncounter: number;
    birthDate: Date;
    hoursWhenTogether: number;
}

export interface ResultCalcDates{
    years: number;
    months: number;
    days: number;
    hours: number;
    labelYear: string;
    labelMonth: string;
    labelDay: string;
    labelHour: string;
}

export interface Rotas {
    type: EnumRotas;
    path: string;
    component: any;
}

export enum EnumRotas {
    Back,
    Home, Home2, WhatIfJesusComeBack, Result, Result2, ShareResult, ShareResult2, BirthDate, Info, YourName,
    YourAge, YourCity, HisAge, HisCity, HisName, Relation, FamiliarRelation, VacationTogether, TimeVacationTogether,
    RegularTimeTogether, TimesSeenEachOther, ThinkingInSomeOne, PressPlay, Calculates
}
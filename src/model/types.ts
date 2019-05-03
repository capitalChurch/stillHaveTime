export interface TypesRegularTime{
    type: EnumTypeRegularTime;
    label: string;
    limit: number;
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
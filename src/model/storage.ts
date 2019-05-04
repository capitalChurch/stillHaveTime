import {defaults} from "./constants";
import {AllData, EnumRelation, EnumTypeRegularTime, Person, TimeRelation} from "./types";

import moment from 'moment';

const keyStorage = "youStillHaveTime";

const getAllData = (): AllData => JSON.parse(sessionStorage.getItem(keyStorage) || "null") || initializeStorage(() => (getAllData() as AllData));
const insertAllData = <T>(obj: AllData, callBack: () =>  T | void = () => {}): T | void => {
    sessionStorage.setItem(keyStorage, JSON.stringify(obj));
    return callBack();
};

const updatePropertie = <T>(changeValue: (obj: AllData) => void): void => {
    let obj = getAllData();
    changeValue(obj);
    insertAllData(obj);
};

export const getMySelf = (): Person => getAllData().mySelf;
export const getMyRelation = (): Person => getAllData().myRelation;
export const getRelation = (): EnumRelation => getAllData().relation;
export const getTimeSpend = (): TimeRelation => getAllData().timesSpend;

export const saveMyBirthDate = (date: Date): void => {
    const years = moment().diff(moment(date), "years");
    updatePropertie(t => t.mySelf.birthDate = date);
    updatePropertie(t => t.mySelf.age = years)
};

export const saveMyName = (name: string): void => updatePropertie(t => t.mySelf.name = name);
export const saveMyAge = (age: number): void => updatePropertie(t => t.mySelf.age = age);
export const saveMyCity = (city: string): void => updatePropertie(t => t.mySelf.city = city);

export const saveHisName = (name: string): void => updatePropertie(t => t.myRelation.name = name);
export const saveHisAge = (age: number): void => updatePropertie(t => t.myRelation.age = age);
export const saveHisCity = (city: string): void => updatePropertie(t => t.myRelation.city = city);

export const saveRelation = (relation: EnumRelation): void => updatePropertie(t => t.relation = relation);

export const saveHasVacation = (hasVacation: boolean): void => updatePropertie(t => t.timesSpend.hasVacation = hasVacation);
export const saveDaysVacation = (daysVacation: number): void => updatePropertie(t => t.timesSpend.daysInVacation = daysVacation);
export const saveRegularTime = (type: EnumTypeRegularTime): void => updatePropertie(t => t.timesSpend.regularTime = type);
export const saveTimesPerEachEncounter = (n: number): void => updatePropertie(t => t.timesSpend.timesPerEachEncounter = n);
export const saveHoursWhenTogether = (n: number): void => updatePropertie(t => t.timesSpend.hoursWhenTogether = n);

export const initializeStorage = <T>(callback: () => T | void): T | void => insertAllData({
   mySelf:{
       name: "",
       age: defaults.age,
       city: defaults.city,
       birthDate: new Date(1990, 1,1)
   } ,
    myRelation:{
        name: "",
        age: defaults.age,
        city: defaults.city,
        birthDate: new Date(1990,1,1)
    },
    relation: defaults.relation,
    timesSpend:{
       hoursWhenTogether: defaults.hoursWhenTogether,
        timesPerEachEncounter: defaults.timesPerEachEncounter,
        regularTime: defaults.regularTime,
        daysInVacation: defaults.daysInVacation,
        hasVacation: null 
    },
}, callback);

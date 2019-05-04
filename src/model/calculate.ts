import {EnumTypeRegularTime, ResultCalcDates} from "./types";
import {getMyRelation, getMySelf, getTimeSpend} from "./storage";

const timeToDeath = 80;
const timeSpend = getTimeSpend();
const hoursAvailableInVacation = 24 - 8;

const yearsAvailable = (): number => {
    const myAge = getMySelf().age;
    const secondPersonAge = getMyRelation().age;

    const agesLive = myAge < secondPersonAge ? myAge : secondPersonAge;

    return timeToDeath - agesLive;
};

const qtyEncountersPerYear = (): number => {
    const multipliers = [
        {type: EnumTypeRegularTime.semana, times: 52},
        {type: EnumTypeRegularTime.mes, times: 12},
        {type: EnumTypeRegularTime.ano, times: 1}
    ];

    const multiplier: number = (multipliers.find(x => x.type === timeSpend.regularTime) || {times: 1}).times;

    return timeSpend.timesPerEachEncounter * multiplier;
};

const vacationDays = (): number => timeSpend.hasVacation ? timeSpend.daysInVacation : 0;

const calcHoursTogether = () => {
    const hoursPerYear = timeSpend.hoursWhenTogether * qtyEncountersPerYear();
    const hoursOnVacation = hoursAvailableInVacation * vacationDays();
    
    return (hoursOnVacation + hoursPerYear) * yearsAvailable();
};

const resultCalc = (): ResultCalcDates => {

    const hours = calcHoursTogether();
    
    const years = Math.floor(hours / (365 * 24));
    let hoursLeft = hours % (365 * 24);

    const months = Math.floor(hoursLeft / (30 * 24));
    hoursLeft = hoursLeft % (30 * 24);

    const days = Math.floor(hoursLeft / 24);
    hoursLeft = hoursLeft % 24;

    const labelYear = years === 1 ? "ano" : "anos";
    const labelMonth = months === 1 ? "mes" : "meses";
    const labelDay = days === 1 ? "dia" : "dias";
    const labelHour = hoursLeft === 1 ? "hora" : "horas"; 
    
    return { years, months, days, hours: hoursLeft, labelYear, labelMonth, labelDay, labelHour};    
};

export default resultCalc;

export const padStart = (text: string, targetLength: number) =>{
    let padString = "0";
    targetLength = targetLength >> 0; //truncate if number, or convert non-number to 0;
    padString = String(typeof padString !== 'undefined' ? padString : ' ');
    if (text.length >= targetLength) {
        return String(text);
    } else {
        targetLength = targetLength - text.length;
        if (targetLength > padString.length) {
            padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
        }
        return padString.slice(0, targetLength) + String(text);
    }
};

export const formatBeautiful = (text: string) => text.substr(0, 1).toUpperCase() + text.substr(1).toLowerCase();
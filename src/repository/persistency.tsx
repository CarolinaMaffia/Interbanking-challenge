import { QuoteType } from "../types/QuoteType"

export const saveQuotes = (quotesArray: QuoteType[]) => {
    localStorage.setItem('quotesKey', JSON.stringify(quotesArray));
}

export const getQuotes = () => {
    const jsonFromStorage: string | null = localStorage.getItem('quotesKey');
    if(jsonFromStorage !== null) {
        const quotesFromStorage = JSON.parse(jsonFromStorage);
        return quotesFromStorage;
    } else {
        return [];
    }
}
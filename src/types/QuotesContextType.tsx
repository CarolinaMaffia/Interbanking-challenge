import { QuoteType } from "./QuoteType";

export interface QuotesContextType {
    handleQuoteSearch: (quoteSearch: string) => void;
    searchedQuotes: QuoteType[];
    addNewQuote: (quote: string, author: string) => void;
    deleteQuote: (id: number) => void;
    hasQuotes: () => boolean;
}
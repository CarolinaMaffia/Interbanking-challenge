import { QuoteType } from "./QuoteType";

export interface QuotesContextType {
    handleQuoteSearch: (quoteSearch: string) => void;
    searchedQuotes: QuoteType[]
}
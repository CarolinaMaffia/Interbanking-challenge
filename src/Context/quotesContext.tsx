import { createContext, useState } from 'react';
import { QuotesContextType } from '../types/QuotesContextType';
import { QuoteType } from '../types/QuoteType';

interface QuotesProviderProps {
    children: JSX.Element,
}

const quotesArray: QuoteType[] = [
    {
        quote: "Test",
        author: 'Author'
    },
    {
        quote: "TestQuote",
        author: 'Lorem ipsum'
    },
    {
        quote: "Testtt",
        author: 'Lorem ipsum'
    },
    {
        quote: "Long test Long test Long test Long test",
        author: 'Lorem ipsum'
    },
    {
        quote: "Kirby",
        author: 'Lorem ipsum'
    },
    {
        quote: "Haru",
        author: 'Lorem ipsum'
    },
]

const initialValue: QuotesContextType = {
    handleQuoteSearch: () => {},
    searchedQuotes: quotesArray,
}

const QuotesContext = createContext<QuotesContextType>(initialValue);

export const QuotesProvider = ({ children }: QuotesProviderProps) => {
    const [quotes, setQuotes] = useState<QuoteType[]>(quotesArray);
    const [searchedQuotes, setSearchedQuotes] = useState<QuoteType[]>(quotesArray);

    const handleQuoteSearch = (quoteSearch: string) => {
        const filteredQuotes: QuoteType[] =  quotes.filter((item) => {
            return item.quote.toLowerCase().includes(quoteSearch.toLowerCase()) || item.author.toLowerCase().includes(quoteSearch.toLowerCase());
        })
        setSearchedQuotes(filteredQuotes);
    }

    const quotesContextData: QuotesContextType = { handleQuoteSearch, searchedQuotes }

    return (
        <QuotesContext.Provider value={quotesContextData} >
            {children}
        </QuotesContext.Provider>
    );
};

export default QuotesContext;
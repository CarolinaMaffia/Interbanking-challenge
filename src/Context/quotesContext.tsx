import { createContext, useState } from 'react';
import { QuotesContextType } from '../types/QuotesContextType';
import { QuoteType } from '../types/QuoteType';

interface QuotesProviderProps {
    children: JSX.Element,
}

const quotesArray: QuoteType[] = [
    {
        quote: "The truth. It is a beautiful and terrible thing, and should therefore be treated with great caution.",
        author: 'Albus Dumbledore'
    },
    {
        quote: "I solemnly swear that I am up to no good.",
        author: 'George Weasley'
    },
    {
        quote: "Test",
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
    addNewQuote: () => {},
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
    };

    const addNewQuote = (quote: string, author: string) => {
        const quotesAux = quotes;
        if(quote && author) {
            quotesAux.unshift({ quote, author });
            setQuotes(quotesAux);
            setSearchedQuotes(quotesAux);
        }
    };

    const quotesContextData: QuotesContextType = { handleQuoteSearch, searchedQuotes, addNewQuote }

    return (
        <QuotesContext.Provider value={quotesContextData} >
            {children}
        </QuotesContext.Provider>
    );
};

export default QuotesContext;
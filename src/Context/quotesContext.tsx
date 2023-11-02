import { createContext, useState } from 'react';
import { QuotesContextType } from '../types/QuotesContextType';
import { QuoteType } from '../types/QuoteType';

interface QuotesProviderProps {
    children: JSX.Element,
}

const quotesArray: QuoteType[] = [
    {
        quote: "The truth. It is a beautiful and terrible thing, and should therefore be treated with great caution.",
        author: 'Albus Dumbledore',
        id: 1,
    },
    {
        quote: "I solemnly swear that I am up to no good.",
        author: 'George Weasley',
        id: 2,

    },
    {
        quote: "Test",
        author: 'Lorem ipsum',
        id: 3,
    },
    {
        quote: "Long test Long test Long test Long test",
        author: 'Lorem ipsum',
        id: 4,
    },
    {
        quote: "Kirby",
        author: 'Lorem ipsum',
        id: 5,
    },
    {
        quote: "Haru",
        author: 'Lorem ipsum',
        id: 6,
    },
]

const initialValue: QuotesContextType = {
    handleQuoteSearch: () => {},
    searchedQuotes: quotesArray,
    addNewQuote: () => {},
    deleteQuote: () => {},
    hasQuotes: () => false,
}

const QuotesContext = createContext<QuotesContextType>(initialValue);

export const QuotesProvider = ({ children }: QuotesProviderProps) => {
    const [quotes, setQuotes] = useState<QuoteType[]>(quotesArray);
    const [searchedQuotes, setSearchedQuotes] = useState<QuoteType[]>(quotesArray);
    const [quoteId, setQuoteId] = useState<number>(0);

    const handleQuoteSearch = (quoteSearch: string) => {
        const filteredQuotes: QuoteType[] =  quotes.filter((item) => {
            return item.quote.toLowerCase().includes(quoteSearch.toLowerCase()) || item.author.toLowerCase().includes(quoteSearch.toLowerCase());
        })
        setSearchedQuotes(filteredQuotes);
    };

    const generateQuoteId = () => {
        const newId = quoteId + 1;
        setQuoteId(newId);
        return newId;
    }

    const addNewQuote = (quote: string, author: string) => {
        const quotesAux = quotes;
        const id = generateQuoteId();
        if(quote && author) {
            quotesAux.unshift({ quote, author, id });
            setQuotes(quotesAux);
            setSearchedQuotes(quotesAux);
        }
    };

    const deleteQuote = (id: number) => {
        const filteredQuotes = quotes.filter((item) => item.id !== id);
        setQuotes(filteredQuotes);
        setSearchedQuotes(filteredQuotes);
    };

    const hasQuotes = () => {
        if(quotes.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    const quotesContextData: QuotesContextType = { handleQuoteSearch, searchedQuotes, addNewQuote, deleteQuote, hasQuotes }

    return (
        <QuotesContext.Provider value={quotesContextData} >
            {children}
        </QuotesContext.Provider>
    );
};

export default QuotesContext;
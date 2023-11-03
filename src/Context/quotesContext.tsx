import { createContext, useEffect, useState } from 'react';
import { QuotesContextType } from '../types/QuotesContextType';
import { QuoteType } from '../types/QuoteType';
import { getQuotes, saveQuotes } from '../repository/persistency';

interface QuotesProviderProps {
    children: JSX.Element,
}

const initialValue: QuotesContextType = {
    handleQuoteSearch: () => {},
    searchedQuotes: [],
    addNewQuote: () => {},
    deleteQuote: () => {},
    hasQuotes: () => false,
}

const QuotesContext = createContext<QuotesContextType>(initialValue);

export const QuotesProvider = ({ children }: QuotesProviderProps) => {
    const [quotes, setQuotes] = useState<QuoteType[]>([]);
    const [searchedQuotes, setSearchedQuotes] = useState<QuoteType[]>([]);

    useEffect(() => {
        const savedQuotes = getQuotes();
        setSearchedQuotes(savedQuotes);
        setQuotes(savedQuotes);
    }, [])

    const getMaxId = () => {
        const idArray = quotes.map((quote) => {
            return quote.id
        });

        if(idArray.length === 0) {
            return 0;
        }
        const maxId = Math.max(...idArray);
        return maxId;
    }

    const handleQuoteSearch = (quoteSearch: string) => {
        const filteredQuotes: QuoteType[] =  quotes.filter((item) => {
            return item.quote.toLowerCase().includes(quoteSearch.toLowerCase()) || item.author.toLowerCase().includes(quoteSearch.toLowerCase());
        })
        setSearchedQuotes(filteredQuotes);
    };

    const generateQuoteId = () => {
        const newId = getMaxId() + 1;
        return newId;
    }

    const addNewQuote = (quote: string, author: string) => {
        const quotesAux = quotes;
        const id = generateQuoteId();
        if(quote && author) {
            quotesAux.unshift({ quote, author, id });
            setQuotes(quotesAux);
            setSearchedQuotes(quotesAux);
            saveQuotes(quotesAux);
        }
    };

    const deleteQuote = (id: number) => {
        const filteredQuotes = quotes.filter((item) => item.id !== id);
        setQuotes(filteredQuotes);
        setSearchedQuotes(filteredQuotes);
        saveQuotes(filteredQuotes);
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
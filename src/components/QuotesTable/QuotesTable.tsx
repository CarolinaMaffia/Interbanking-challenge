import { useContext } from 'react';
import QuoteCard from '../QuoteCard/QuoteCard';
import SearchBar from '../SearchBar/SearchBar';
import './QuotesTable.scss';
import QuotesContext from '../../Context/quotesContext';
import { QuotesContextType } from '../../types/QuotesContextType';

const QuotesTable = () => {
const { searchedQuotes, handleQuoteSearch } = useContext<QuotesContextType>(QuotesContext);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleQuoteSearch(e.target.value);
    }

    return (
        <div className="quotes-table-container">
            <SearchBar handleInputChange={handleInputChange} />
           <div className="quotes">
            {searchedQuotes.map((quote, i) => {
                return (
                    <QuoteCard 
                        quote={quote.quote} 
                        author={quote.author} 
                        key={i}
                    />
                )
            })}
           </div>
        </div>
    );
};

export default QuotesTable;
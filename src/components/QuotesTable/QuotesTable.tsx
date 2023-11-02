import { useContext, useState } from 'react';
import QuoteCard from '../QuoteCard/QuoteCard';
import SearchBar from '../SearchBar/SearchBar';
import './QuotesTable.scss';
import QuotesContext from '../../Context/quotesContext';
import { QuotesContextType } from '../../types/QuotesContextType';
import Modal from '../Modal/Modal';
import AddQuotesModalContent from '../AddQuotesModalContent/AddQuotesModalContent';

const QuotesTable = () => {
    const { searchedQuotes, handleQuoteSearch, addNewQuote, hasQuotes } = useContext<QuotesContextType>(QuotesContext);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleQuoteSearch(e.target.value);
    }

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleSubmitCallback = (quote: string, author: string) => {
        addNewQuote(quote, author);
        closeModal();
    };
    
    const showContent = () => {
        if(!hasQuotes()) {
            return (
                <div className='content-container'> 
                    <h3 className='no-cards-text'>Hello there! Add some of your favorites quotes here ✍️</h3>
                </div> 
            )
        } else if(searchedQuotes.length === 0) {
            return (
                <div className='content-container'> 
                    <h3 className='no-cards-text'>There are no matching quotes for the search. 🙅🏻‍♀️ </h3>
                </div>
            );
        } else {
            return (
                <div className="content-container">
                    {searchedQuotes.map((quote, i) => {
                        return (
                            <QuoteCard 
                                quote={quote.quote} 
                                author={quote.author} 
                                key={i}
                                id={quote.id}
                            />
                        );
                    })};
                </div>
            )
        }
    }

    return (
        <div className="quotes-table-container">
            <div className="quotes-table-header">
                <SearchBar handleInputChange={handleInputChange} />
                <button onClick={openModal} className='add-quote'>Add quote</button>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <AddQuotesModalContent handleSubmitCallback={handleSubmitCallback}/>
            </Modal>
           {showContent()}
        </div>
    );
};

export default QuotesTable;
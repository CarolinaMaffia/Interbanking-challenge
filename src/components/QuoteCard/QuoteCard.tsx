import './QuoteCard.scss';
import TrashCanIcon from '../../assets/trashcan.svg';
import { useContext } from 'react';
import { QuotesContextType } from '../../types/QuotesContextType';
import QuotesContext from '../../Context/quotesContext';

interface QuoteCardProps {
    quote: string,
    author: string,
    id: number
}

const QuoteCard = ({ quote, author, id}: QuoteCardProps) => {
    const { deleteQuote } = useContext<QuotesContextType>(QuotesContext);


    return (
        <div className="quotecard-container">
            <div className='top-section-container'>
                <h3 className='quote'>{quote}</h3>
            </div>
            <div className='bottom-section-container'>
            <button className="close-button" onClick={() => deleteQuote(id)}>
                <img 
                    src={TrashCanIcon} 
                    alt="An icon to delete the quote" 
                    className='delete-image'
                />
            </button>
            <p className='author'>- {author}</p>
            </div>
        </div>
    );
};

export default QuoteCard;
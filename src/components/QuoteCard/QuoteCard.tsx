import './QuoteCard.scss';
import Quote from '../../assets/quote.svg';

const QuoteCard = ({ quote, author} : {quote: string; author: string}) => {
    return (
        <div className="quotecard-container">
            <div className='quote-container'>
                <img 
                    src={Quote} 
                    alt="quote icon" 
                    className='quote-image'
                />
                <h3 className='quote'>{quote}</h3>
            </div>
            <p className='author'>- {author}</p>
        </div>
    );
};

export default QuoteCard;
import './QuoteCard.scss';
import TrashCanIcon from '../../assets/trashcan.svg';

const QuoteCard = ({ quote, author} : { quote: string; author: string }) => {
    return (
        <div className="quotecard-container">
            <div className='top-section-container'>
                <h3 className='quote'>{quote}</h3>
            </div>
            <div className='bottom-section-container'>
            <button className="close-button" onClick={() => console.log('test')}>
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
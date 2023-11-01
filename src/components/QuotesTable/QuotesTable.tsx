import QuoteCard from '../QuoteCard/QuoteCard';
import './QuotesTable.scss';

const QuotesTable = () => {
    const quotesArray = [
        {
            quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit autem saepe",
            author: 'Lorem ipsum'
        },
        {
            quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit autem saepe",
            author: 'Lorem ipsum'
        },
        {
            quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit autem saepe",
            author: 'Lorem ipsum'
        },
        {
            quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit autem saepe",
            author: 'Lorem ipsum'
        },
        {
            quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit autem saepe",
            author: 'Lorem ipsum'
        },
        {
            quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit autem saepe",
            author: 'Lorem ipsum'
        },
    ]
    return (
        <div className="quotes-table-container">
           {quotesArray.map((quote, i) => {
            return (
                <QuoteCard 
                    quote={quote.quote} 
                    author={quote.author} 
                    key={i}
                />
            )
           })}
        </div>
    );
};

export default QuotesTable;
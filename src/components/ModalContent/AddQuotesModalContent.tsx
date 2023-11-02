import { useState, useEffect } from 'react';
import './AddQuotesModalContent.scss';

const AddQuotesModalContent = ({ handleSubmitCallback }:  { handleSubmitCallback: (quote: string, author: string) => void }) => {
    const [newQuote, setNewQuote] = useState<string>('');
    const [newAuthor, setNewAuthor] = useState<string>('');
    const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(false);

    useEffect(() => {
        handleDisabledButton();
    }, [newQuote, newAuthor]);

    const maxTextAreaCharacterCount = 100;
    const maxAuthorInputCharacterCount = 35;


    const handleCharacterCountStyles = (textLength: number, maxCharacterCount: number) => {
        if(textLength === maxCharacterCount){
            return 'red'
        } else {
            '#333'
        }
    };

    const maxTextAreaCharactersStyles: React.CSSProperties = {
        color: handleCharacterCountStyles(newQuote.length, maxTextAreaCharacterCount)
    }

    const maxAuthorInputCharactersStyles: React.CSSProperties = {
        color: handleCharacterCountStyles(newAuthor.length, maxAuthorInputCharacterCount)
    }

    const handleDisabledButton = () => {
        const shouldEnableButton = newQuote && newAuthor;
        if(shouldEnableButton) {
            setIsButtonEnabled(true);
        } else {
            setIsButtonEnabled(false);
        }
    }

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const textAreaValue = e.target.value;
            setNewQuote(textAreaValue);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewAuthor(e.target.value)
    }

    const handleSubmit = () => {
        handleSubmitCallback(newQuote, newAuthor);
    };

    return (
        <div className="modal-content">
            <div className="">
                <h3>Add your quote! ✏️</h3>
            </div>
            <div className="submit-container">
                <div className='input-container'>
                    <textarea
                        rows={4} 
                        onChange={handleTextAreaChange}
                        placeholder="Add your quote here"
                        maxLength={maxTextAreaCharacterCount}
                        className="textarea"
                    />
                    <p className='maxCharacterCount' style={maxTextAreaCharactersStyles}>{`${newQuote.length}/${maxTextAreaCharacterCount}`}</p>
                </div>
                <div className='input-container'>
                    <input 
                        type="text" 
                        className="author-input" 
                        placeholder="Add author of your quote"
                        onChange={handleInputChange}
                        maxLength={maxAuthorInputCharacterCount}
                    />
                    <p className='maxCharacterCount' style={maxAuthorInputCharactersStyles}>{`${newAuthor.length}/${maxAuthorInputCharacterCount}`}</p>
                </div>
                <button className="submit-button" onClick={handleSubmit} disabled={!isButtonEnabled}>Add quote</button>
            </div>
        </div>
    )
};

export default AddQuotesModalContent;
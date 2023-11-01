import './SearchBar.scss';

interface SearchBarTypes {
    handleInputChange:  React.ChangeEventHandler<HTMLInputElement>
}

const SearchBar = ({ handleInputChange } : SearchBarTypes) => {
    return (
        <div className="search-container">
            <input 
                type="search"
                placeholder="Search quote..."
                onChange={handleInputChange}
                className='search-input'
            />
        </div>
    );
};

export default SearchBar;
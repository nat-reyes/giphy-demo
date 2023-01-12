import React from 'react';
import './InputSearchStyle.css';

/**
 *
 * @param onSearch {func}
 * @returns {JSX.Element}
 * @constructor
 */
function InputSearch({onSearch}){
    return(
       <div>
           <input
               title="Search"
               type="text"
               data-test-id="search-giphy"
               className="search-giphy-input"
               onChange={(event) => onSearch(event?.target?.value)}
               placeholder="Search giphy"
           />
       </div>
    )
}

export default InputSearch;
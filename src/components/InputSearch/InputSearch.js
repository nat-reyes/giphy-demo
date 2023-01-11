import React from 'react';
import './InputSearchStyle.css';

function InputSearch({onSearch}){
    return(
       <div>
           <input
               title="Search"
               type="text"
               id="search-giphy"
               className="search-giphy-input"
               onChange={(event) => onSearch(event?.target?.value)}
               placeholder="Search giphy"
           />
       </div>
    )
}

export default InputSearch;
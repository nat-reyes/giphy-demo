import React from 'react';
import './InputSearchStyle.css';

function InputSearch({onSaveSearch, onSearch}){
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
           <button className="search-giphy-btn" onClick={() => onSearch()}>Search giphy</button>
       </div>
    )
}

export default InputSearch;
import React, {useState} from 'react';
import './BookmarkStyle.css';
import InputSearch from "../../components/InputSearch/InputSearch";
import CardContainer from "../../components/CardsContainer/CardContainer";
import {useSelector} from "react-redux";
import {bookmarksSelector} from "../../reducer/bookmark/BookmarkSlice";
import {Link} from "react-router-dom";

function BookmarkPage(){
    const {bookmarks} = useSelector(bookmarksSelector);
    console.log(bookmarks);
    const [filteredBookmarks, setFilteredBookmarks] = useState(bookmarks);
    return(
        <div>
            <div className="bookmark-page-container">
                <InputSearch />
                <div className="home-page-btn-container">
                    <Link to="/" className="home-page-btn">
                        Homepage
                    </Link>
                </div>
            </div>
            <CardContainer cards={filteredBookmarks}/>
        </div>
    )
}

export default BookmarkPage;
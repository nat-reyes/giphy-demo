import React from 'react';
import './BookmarkStyle.css';
import {useSelector} from "react-redux";
import {bookmarksSelector} from "../../reducer/bookmark/BookmarkSlice";
import {Link} from "react-router-dom";
import {InputSearch, GiphyContainer} from "../../components";

function BookmarkPage(){
    const {bookmarks} = useSelector(bookmarksSelector);
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
            <GiphyContainer cards={bookmarks}/>
        </div>
    )
}

export default BookmarkPage;
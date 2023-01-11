import React from 'react';
import './CardContainer.css';
import Spinner from "../Spinner/Spinner";
import {useDispatch, useSelector} from "react-redux";
import {addGiphy, bookmarksSelector, removeGiphy} from "../../reducer/bookmark/BookmarkSlice";
import PropTypes from "prop-types";
import Pagination from "../Pagination/Pagination";

function CardContainer({cards, isLoading, onPageChange, pagination, shouldShowPagination}) {
    const dispatch = useDispatch();
    const {bookmarks} = useSelector(bookmarksSelector);

    const onSaveGiphy = (giphy) => {
        dispatch(addGiphy(giphy));
        console.log(giphy);
    }

    const onRemoveGiphyFromBookmarks = (giphyId) => {
        console.log(giphyId)
        dispatch(removeGiphy(giphyId));
    }
    console.log(cards)

    const isGiphyStored = (giphyId) => bookmarks?.find((giphy) => giphy?.id === giphyId);
    const renderAddIcon = (giphyId) => isGiphyStored(giphyId) ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
    const handleGiphySaved = (giphy) => isGiphyStored(giphy?.id) ? onRemoveGiphyFromBookmarks(giphy?.id) : onSaveGiphy(giphy)

    return (
        <>
            <div className="cards-container">
                {isLoading && <Spinner/>}
                {cards?.length > 0 && cards.map((giphy) => <div id={giphy?.id} className="card-item">
                    <img src={giphy?.images?.preview_gif?.url}/>
                    <div className="card-item__title">
                      Title:  <span>{giphy?.title}</span>
                    </div>
                    <div className="card-item__title">
                        <span>{giphy?.user?.username || 'No user'}</span>
                    </div>
                    <div className="add-item-bookmark" onClick={() => handleGiphySaved(giphy)}>
                        <i className={renderAddIcon(giphy?.id)}></i>
                    </div>
                </div>)}
            </div>
            {shouldShowPagination && (
                <Pagination onPageChange={onPageChange} pagination={pagination}/>
            )}
        </>

    )
}

CardContainer.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    isLoading: PropTypes.bool,
};
export default CardContainer;
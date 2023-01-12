import React from 'react';
import './CardContainer.css';
import {useDispatch, useSelector} from "react-redux";
import {addGiphy, bookmarksSelector, removeGiphy} from "../../reducer/bookmark/BookmarkSlice";
import PropTypes from "prop-types";
import {Pagination, Spinner} from "../index";

/**
 *
 * @param cards {array} items to show in the grid
 * @param isLoading {boolean} is loading data
 * @param onPageChange {func} function triggered when the pagination arrows are clicked
 * @param pagination {obj}
 * @param shouldShowPagination {boolean}
 * @returns {JSX.Element}
 * @constructor
 */
function CardContainer({cards, isLoading, onPageChange, pagination, shouldShowPagination}) {
    const dispatch = useDispatch();
    const {bookmarks} = useSelector(bookmarksSelector);

    const onSaveGiphy = (giphy) => dispatch(addGiphy(giphy));
    const onRemoveGiphyFromBookmarks = (giphyId) => dispatch(removeGiphy(giphyId));

    const isGiphyStored = (giphyId) => bookmarks?.find((giphy) => giphy?.id === giphyId);
    const renderAddIcon = (giphyId) => isGiphyStored(giphyId) ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
    const handleGiphySaved = (giphy) => isGiphyStored(giphy?.id) ? onRemoveGiphyFromBookmarks(giphy?.id) : onSaveGiphy(giphy)

    return (
        <>
            {isLoading ? <Spinner/> :
                <div className="cards-container">
                    {cards?.length > 0 && cards.map((giphy) => <div id={giphy?.id} className="card-item">
                        <picture>
                            <source type="image/webp" srcSet={giphy?.images?.preview_gif?.url}/>
                            <img width="248" height="248" src={giphy?.images?.preview_gif?.url} alt={giphy?.title}/>
                        </picture>
                        <div className="card-info">
                            <div>
                                <span className="card-item__title"> Title: </span>
                                <span className="card-item__info">{giphy?.title}</span>
                            </div>
                            <div>
                                <span className="card-item__title"> User: </span>
                                <span className="card-item__info">{giphy?.user?.username || 'No user'}</span>
                            </div>
                        </div>

                        <div className="add-item-bookmark" onClick={() => handleGiphySaved(giphy)}>
                            <i className={renderAddIcon(giphy?.id)}></i>
                        </div>
                    </div>)}
                </div>
            }
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
export default React.memo(CardContainer);
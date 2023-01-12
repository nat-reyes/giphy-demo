import React, {useEffect, useState} from 'react';
import './SearchStyle.css';
import {requestGiphy, requestTrending} from "../../services/giphyService";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {trendingSelector, addTrendingGiphy} from "../../reducer/trending/trendingSlice";
import {GiphyContainer, InputSearch} from "../../components";

function SearchPage() {
    const dispatch = useDispatch();
    const {trending} = useSelector(trendingSelector);

    const [giphyImages, setGiphyImages] = useState([]);
    const [searchedValue, setSearchedValue] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const dispatchTrending = (data) => dispatch(addTrendingGiphy(data));
        requestTrending(dispatchTrending);
    }, []);

    const onSearchGiphy = (s) => {
        const params = {
            q: s,
            limit: 25,
        }
        setSearchedValue(s);
        onRequest(params);
    }
    const onPageChange = (pageNumber, limit) => {
        const params = {
            q: searchedValue,
            limit: 25,
            offset: pageNumber * limit,
        }
        onRequest(params);
    }

    const onRequest = (params) => requestGiphy(setGiphyImages, params, setIsLoading);
    const hasSearchedValues = giphyImages?.data?.length > 0;

    const giphyItems = hasSearchedValues ? giphyImages?.data : trending?.data;
    const paginationItems = hasSearchedValues ? giphyImages?.pagination : trending?.pagination;

    return (
        <div className="search-page-container">
            <div className="search-page-input-container">
                <InputSearch onSearch={onSearchGiphy}/>
                <div className="saved-gifts-btn-container">
                    <Link to="/bookmark" className="saved-gifts-btn">
                        My Saved Gifts
                    </Link>
                </div>
            </div>
            <GiphyContainer cards={giphyItems} isLoading={isLoading}
                            onPageChange={(pageNumber) => onPageChange(pageNumber, 25)}
                            shouldShowPagination={hasSearchedValues}
                            pagination={{
                                pageCount: paginationItems?.total_count,
                                pageSize: paginationItems?.count,
                            }}/>
        </div>
    )
}

export default SearchPage;
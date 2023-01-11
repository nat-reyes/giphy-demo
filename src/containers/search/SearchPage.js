import React, {useEffect, useState} from 'react';
import './SearchStyle.css';
import CardContainer from "../../components/CardsContainer/CardContainer";
import {requestGiphy, requestTrending} from "../../services/giphyService";
import {Link} from "react-router-dom";
import InputSearch from "../../components/InputSearch/InputSearch";
import {useDispatch, useSelector} from "react-redux";
import {trendingSelector, addTrendingGiphy} from "../../reducer/trending/trendingSlice";

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
        requestGiphy(setGiphyImages, params, setIsLoading);
    }
    const onPageChange = (pageNumber, limit) => {
        const params = {
            q: searchedValue,
            limit: 25,
            offset: pageNumber * limit,
        }
        requestGiphy(setGiphyImages, params, setIsLoading);
    }

    const {data, pagination} = giphyImages;
    const giphyItems = data?.length > 0 ? data : trending?.data;
    const paginationItems = data?.length > 0 ? pagination : trending?.pagination;
    console.log(giphyItems)
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
            <CardContainer cards={giphyItems} isLoading={isLoading}
                           onPageChange={(pageNumber) => onPageChange(pageNumber, 25)}
                           shouldShowPagination={data?.length > 0}
                           pagination={{
                               pageCount: paginationItems?.total_count,
                               pageSize: paginationItems?.count,
                           }}/>
        </div>
    )
}

export default SearchPage;
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import bookmarkReducer from "./bookmark/BookmarkSlice";
import trendingReducer from "./trending/trendingSlice";
const reducer = combineReducers({
    bookmarks: bookmarkReducer,
    trending: trendingReducer,
});

export const store = configureStore({
    reducer,
});

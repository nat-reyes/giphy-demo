import { createSlice, createSelector } from "@reduxjs/toolkit";

export const trendingSlice = createSlice({
    name: "trending",
    initialState: {
        trending: [],
    },
    reducers: {
        addTrendingGiphy: (state, { payload }) => {
           state.trending = payload;
        },
    },
});

export const { addTrendingGiphy } = trendingSlice.actions;

export const trendingSelector = createSelector(
    (state) => state?.trending?.trending,
    (trending) => ({ trending })
);

export default trendingSlice.reducer;

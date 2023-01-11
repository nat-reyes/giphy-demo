import { createSlice, createSelector } from "@reduxjs/toolkit";

export const bookmarkSlice = createSlice({
    name: "bookmarks",
    initialState: {
        bookmarks: [],
    },
    reducers: {
        addGiphy: (state, { payload }) => {
            if (state.bookmarks.find((giphy) => giphy?.id === payload?.id)) {
                return state;
            }

            state.bookmarks = [...state.bookmarks, payload];
        },
        removeGiphy: (state, { payload }) => {
            state.bookmarks = state.bookmarks.filter((giphy) => giphy?.id !== payload);
        }
    },
});

export const { addGiphy, removeGiphy } = bookmarkSlice.actions;

export const bookmarksSelector = createSelector(
    (state) => state?.bookmarks?.bookmarks,
    (bookmarks) => ({ bookmarks })
);

export default bookmarkSlice.reducer;

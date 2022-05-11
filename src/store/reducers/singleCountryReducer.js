import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    status: false,
    error: null,
};

export const singleCountry = createSlice({
    name: "singleCountry",
    initialState,
    reducers: {
        singleCountryPending: (state) => {
            state.status = true;
        },
        singleCountryFulfilled: (state, action) => {
            state.status = false;
            state.data = action.payload.data;
        },
        singleCountryRejected: (state, action) => {
            state.status = false;
            state.error = action.payload.error;
        },
    },
});

export const {
    singleCountryFulfilled,
    singleCountryPending,
    singleCountryRejected,
} = singleCountry.actions;
export default singleCountry.reducer;

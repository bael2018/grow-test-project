import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    status: false,
    error: null,
    country: localStorage.getItem("country") || 'Kyrgyzstan',
};

export const countryReducer = createSlice({
    name: "country",
    initialState,
    reducers: {
        countryPending: (state) => {
            state.status = true;
        },
        countryFulfilled: (state, action) => {
            state.status = false;
            state.data = action.payload.data;
        },
        countryRejected: (state, action) => {
            state.status = false;
            state.error = action.payload.error;
        },
        setCountry: (state, action) => {
            state.country = action.payload.country;
        },
    },
});

export const { countryFulfilled, countryPending, countryRejected, setCountry } =
    countryReducer.actions;
export default countryReducer.reducer;

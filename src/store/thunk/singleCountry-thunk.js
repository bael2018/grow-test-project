import {
    singleCountryFulfilled,
    singleCountryPending,
    singleCountryRejected,
} from "../reducers/singleCountryReducer";
import axios from "axios";

const API_URL = "https://api.covid19api.com/";

export const singleCountryThunk = (country) => async (dispatch) => {
    dispatch(singleCountryPending());
    try {
        const response = await axios.get(`${API_URL}dayone/country/${country}`);
        dispatch(singleCountryFulfilled({ data: response.data }));
    } catch (error) {
        dispatch(singleCountryRejected({ error: error.response.status }));
    }
};

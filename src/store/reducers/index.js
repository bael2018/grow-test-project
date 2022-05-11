import SingleCountryReducer from "./singleCountryReducer";
import countryReducer from "./countryReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    singleCountry: SingleCountryReducer,
    country: countryReducer,
})
import { countryFulfilled, countryPending, countryRejected } from "../reducers/countryReducer"
import axios from 'axios'

const API_URL = 'https://api.covid19api.com/'

export const countryThunk = () => async (dispatch) => {
    dispatch(countryPending())
    try {
        const response = await axios.get(`${API_URL}countries`)
        dispatch(countryFulfilled({ data: response.data }))
    } catch (error) {
        dispatch(countryRejected({ error: error.response.status }))
    }
}
import { setCountry } from "../../store/reducers/countryReducer";
import { countryThunk } from "../../store/thunk/country-thunk";
import { useDispatch, useSelector } from "react-redux";
import "../../scss/components/_filterbycountry.scss";
import { FaAngleDown } from "react-icons/fa";
import { useEffect } from "react";

const FilterByCountry = () => {
    const { data, country } = useSelector((state) => state.country);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(countryThunk());
    }, []);

    const countryHandler = (str) => {
        dispatch(setCountry({ country: str }))
        localStorage.setItem('country', str)
    };

    return (
        <div className="filter">
            <span className="filter__country">
                {country}
                <FaAngleDown />
            </span>
            <div className="filter__countrylist">
                {data?.length ? (
                    data?.map(({ Country, Slug }) => (
                        <p onClick={() => countryHandler(Country)} key={Slug}>
                            {Country}
                        </p>
                    ))
                ) : (
                    <h4>Ничего нет</h4>
                )}
            </div>
        </div>
    );
};

export default FilterByCountry;

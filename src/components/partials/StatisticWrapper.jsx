import { singleCountryThunk } from "../../store/thunk/singleCountry-thunk";
import { mathRevovered } from "../../utils/mathRecovered";
import { useDispatch, useSelector } from "react-redux";
import "../../scss/components/_wrapper.scss";
import Loader from "../elements/ui/Loader";
import Error from "../../pages/Error";
import CovidCases from "./CovidCases";
import CovidList from "./CovidList";
import { useEffect } from "react";
import Empty from "./Empty";

const StatisticWrapper = () => {
    const { data, status, error } = useSelector((state) => state.singleCountry);
    const { country } = useSelector((state) => state.country);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(singleCountryThunk(country));
    }, [country]);

    if (error) {
        return <Error status={error} />;
    } else {
        return status ? (
            <Loader />
        ) : data.length ? (
            <div className="wrapper">
                <CovidList data={data.slice(0,5)} />
                <CovidCases data={mathRevovered(data.slice(0, 5))} />
            </div>
        ) : <Empty/>;
    }
};

export default StatisticWrapper;

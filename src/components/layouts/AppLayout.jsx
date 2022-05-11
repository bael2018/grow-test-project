import { setCountry } from "../../store/reducers/countryReducer";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import { useEffect } from "react";
import "../../scss/style.scss";

const AppLayout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!localStorage.getItem("country")) {
            dispatch(setCountry({ country: 'Kyrgyzstan' }));
            localStorage.setItem('country', 'Kyrgyzstan')
        } else {
            dispatch(setCountry({ country: localStorage.getItem("country") }));
        }
    }, []);

    return (
        <div className="root">
            <Header />
            <Outlet />
        </div>
    );
};

export default AppLayout;

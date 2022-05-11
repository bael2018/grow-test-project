import { useNavigate } from "react-router-dom";
import { appPaths } from "../constants/appPaths";
import "../scss/components/_handler.scss";

const Redirect = () => {
    const navigate = useNavigate();

    const redirectHandler = () => {
        navigate(appPaths.MAIN);
    };

    return (
        <div className="empty">
            <h3>Такой страницы нет</h3>
            <span onClick={redirectHandler}>главную страницу</span>{" "}
        </div>
    );
};

export default Redirect;

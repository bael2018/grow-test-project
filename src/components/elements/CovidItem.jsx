import { parseMonth } from "../../utils/parseMonth";
import "../../scss/components/_coviditem.scss";

const CovidItem = ({ info }) => {
    const { Active, Recovered, Deaths, Confirmed, Date } = info;

    const date = new window.Date(Date);

    return (
        <div className="covid-item">
            <div className="covid-item__wrapper">
                <div className="covid-item__wrapper__title">
                    <h4>
                        {date.getDate()} {parseMonth(date.getMonth() + 1)}
                    </h4>
                </div>
                <div className="covid-item__wrapper__content">
                    <div>
                        Active
                        <span>{Active}</span>
                    </div>
                    <div>
                        Deaths
                        <span>{Deaths}</span>
                    </div>
                    <div>
                        Confirmed
                        <span>{Confirmed}</span>
                    </div>
                    <div>
                        Recovered
                        <span>{Recovered}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CovidItem;

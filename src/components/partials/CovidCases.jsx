import { parseMonth } from "../../utils/parseMonth";
import "../../scss/components/_covidcases.scss";

const CovidCases = ({ data }) => {
    const date = new window.Date(data?.Date);

    return (
        <div className="covid-cases">
            <div>
                <h3>Top revovered cases</h3>

                <h2>{data?.Recovered}</h2>

                <span></span>
            </div>
            <p>
                {date.getDate()} {parseMonth(date.getMonth() + 1)}
            </p>
        </div>
    );
};

export default CovidCases;

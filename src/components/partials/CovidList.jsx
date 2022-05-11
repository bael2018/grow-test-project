import CovidItem from "../elements/CovidItem";
import "../../scss/components/_wrapper.scss";

const CovidList = ({ data }) => {
    return (
        <div className="list_wrapper">
            {data.map((item) => (
                <CovidItem key={item.ID} info={item} />
            ))}
        </div>
    );
};

export default CovidList;

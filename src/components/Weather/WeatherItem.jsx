import { Icon } from "@blueprintjs/core";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";


const WeatherItem = ({ item, onDelete }) => {
  if (!item) {
    return null;
  }
  return (
    <div className="itemCard">
      <div className="itemCardHeader">
        <div>{item.title}</div>
        <div>
          <Icon
            icon="cross"
            intent="primary"
            onClick={() => {
              onDelete(item?.id);
            }}
          />
        </div>
      </div>
      <div className="itemCardContent">
        <WeatherInfo item={item} />
      </div>
    </div>
  );
};

export default WeatherItem;

import { Icon } from "@blueprintjs/core";
import { useSelector } from "react-redux";
import { DateTime } from "luxon";
import "./Termin.css";

const KundenList = ({
  items,
  onItemClick,
  onEditItem,
  onDeleteItem,
  sucheValue,
}) => {
  const selectedItem = useSelector(
    (state) => state.termins.selectedItem || null
  );

  const handleItemClick = (item) => {
    onItemClick(item);
  };

  const filteredItems = items.filter(
    (item) =>
      typeof item.name === "string" &&
      item.name.toLowerCase().includes((sucheValue || "").toLowerCase())
  );

  const formatDate = (date) => {
    return DateTime.fromISO(date).toFormat("dd-MM-yyyy");
  };

  const formatTime = (time) => {
    return DateTime.fromISO(time).toFormat("HH:mm");
  };

  return (
    <div>
      {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <div
            className={`listItem ${
              selectedItem && item.id === selectedItem.id ? "selected" : ""
            }`}
            key={item.id}
            onClick={() => handleItemClick(item)}
          >
            <div className="dataItem">{item.name}</div>
            {item.terminDate && (
              <div className="dataItem">
                Termin: {formatDate(item.terminDate)}
              </div>
            )}

            {item.birthdayDate && (
              <div className="dataItem">
                Birthday Date: {formatDate(item.birthdayDate)}
              </div>
            )}
            {item.terminTime && (
              <div className="dataItem">
                Terminszeit: {formatTime(item.terminTime)}
              </div>
            )}
            <div
              className="deleteItem"
              onClick={(e) => {
                onDeleteItem(item.id);
              }}
            >
              <Icon icon="cross" size={12} />
            </div>
          </div>
        ))
      ) : (
        <p>No items found</p>
      )}
    </div>
  );
};

export default KundenList;

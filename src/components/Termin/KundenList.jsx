import { Icon } from "@blueprintjs/core";
import { useSelector } from "react-redux";
import { DateTime } from "luxon";
import "./Termin.css";

const KundenList = ({ items, onItemClick, onEditItem, onDeleteItem, sucheValue }) => {
  const selectedItem = useSelector((state) => state.termins.selectedItem || null);

  const handleItemClick = (item) => {
    onItemClick(item);
  };

  const filteredItems = items.filter(
    (item) =>
      typeof item.name === "string" &&
      item.name.toLowerCase().includes((sucheValue || "").toLowerCase())
  );

  const formatDate = (date) => (date ? DateTime.fromISO(date).toFormat("dd-MM-yyyy") : "—");
  const formatTime = (time) => (time ? DateTime.fromISO(time).toFormat("HH:mm") : "—");

  return (
    <div>
      {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <div
            className={`listItem ${selectedItem && item.id === selectedItem.id ? "selected" : ""}`}
            key={item.id}
            onClick={() => handleItemClick(item)}
          >
            <div className="dataItem">{item.name || "—"}</div>
            <div className="dataItem">
              <span className="label">Termin:</span> {formatDate(item.terminDate)}
            </div>
            <div className="dataItem">
              <span className="label">Geburtsdatum:</span> {formatDate(item.birthdayDate)}
            </div>
            <div className="dataItem">
              <span className="label">Terminszeit:</span> {formatTime(item.terminTime)}
            </div>
            <div
              className="deleteItem"
              onClick={(e) => {
                e.stopPropagation();
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


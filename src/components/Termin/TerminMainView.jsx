import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Details from "./Details";
import Header from "./Header";
import KundenList from "./KundenList";
import {
  setItem,
  addItem,
  deleteItem,
  editItem,
  updateItem,
} from "../../features/terminSlice";
import styled from "styled-components";

const Styles = styled.div`
  .terminMainView-component {
    display: flex;
    flex-direction: column;
    padding: 20px 40px;
    width: 100%;
    .header {
      width: 100%;
    }
    .main-container {
      display: flex;
      flex-direction: row;
      justify-content: start;
      gap: 50px;
      padding: 10px;

      .details {
        flex: 1;
        width: 100%;
        padding: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      .kunden-list {
        flex:2;
        width: 100%;
        
      }
    }
  }
`;

const TerminMainView = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.termins.items);

  const selectedItem = useSelector((state) => state.termins.selectedItem);
  const isEditing = useSelector((state) => state.termins.isEditing);

  const [sucheValue, setSucheValue] = useState("");

  const handleSucheChange = (value) => {
    console.log("Search value received:", value);
    setSucheValue(value);
  };

  const handleAddTermin = (newTermin) => {
    if (!newTermin.name) {
      console.error("Name is required for the new termin:", newTermin);
      return;
    }

    dispatch(addItem(newTermin));
  };

  const handleDeleteItem = (id) => {
    dispatch(deleteItem(id));
  };

  const handleItemClick = (item) => {
    dispatch(setItem(item));
    dispatch(editItem(false));
  };

  const handleEditItem = (item) => {
    dispatch(setItem(item));
    dispatch(editItem(true));
  };

  const handleSave = (updatedItem) => {
    dispatch(updateItem(updatedItem));
    dispatch(setItem(null));
    dispatch(editItem(false));
  };

  const handleCancel = () => {
    dispatch(setItem(null));
    dispatch(editItem(false));
  };

  const filteredItems = items.filter((item) =>
    item.name?.toLowerCase().includes((sucheValue || "").toLowerCase())
  );

  console.log("Filtered items:", filteredItems); // Проверяем результат фильтрации

  return (
    <Styles>
      <div className="terminMainView-component">
        <div className="header">
          <Header
            onSucheChange={handleSucheChange}
            onAddTermin={handleAddTermin}
          />
        </div>
        <div className="main-container">
          <div className="details">
            <Details
              selectedItem={selectedItem}
              onSave={handleSave}
              onCancel={handleCancel}
              isEditing={isEditing}
            />
          </div>
          <div className="kunden-list">
            <KundenList
              items={filteredItems}
              sucheValue={sucheValue}
              onItemClick={handleItemClick}
              onEditItem={handleEditItem}
              onDeleteItem={handleDeleteItem}
            />
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default TerminMainView;

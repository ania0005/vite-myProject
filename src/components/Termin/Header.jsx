import React, { useState } from "react";
import { Button, InputGroup } from "@blueprintjs/core";
import Popover from "./Popover";
import styled from "styled-components";

const Styles = styled.div`
.header {
      background-color: rgb(235, 234, 234);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 10px 5px;
    }
`;

const Header = ({ onSucheChange, onAddTermin }) => {
  const [sucheValue, setSucheValue] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddTermin = () => {
    setIsFormVisible(true);
  };

  const handleSaveTermin = (newTermin) => {
    setIsFormVisible(false);
    if (onAddTermin) {
      onAddTermin(newTermin);
    }
  };

  const handleCancel = () => {
    setIsFormVisible(false);
  };

  const handleSucheChange = (event) => {
    const newValue = event.target.value;
    setSucheValue(newValue);
    if (onSucheChange) {
      onSucheChange(newValue); // Передаем значение строки поиска
    }
  };

  return (
    <Styles>
      <div className="header">
        <Button
          className="button-newTermin"
          onClick={handleAddTermin}
          text="New Termin"
        />
        <InputGroup
          className="input"
          style={{ fontSize: 12 }}
          onChange={handleSucheChange}
          placeholder="Suche..."
          value={sucheValue}
        />
        {isFormVisible && (
          <Popover onSave={handleSaveTermin} onCancel={handleCancel} />
        )}
      </div>
    </Styles>
  );
};

export default Header;

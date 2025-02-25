import React, { useState } from "react";
import { Button, InputGroup } from "@blueprintjs/core";
import Popover from "./Popover";
import "./Termin.css";

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
      onSucheChange(newValue);
    }
  };

  return (
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
  );
};

export default Header;

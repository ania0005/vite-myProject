import React from "react";
import "./Termin.css";
import TerminForm from "./TerminForm";




const Details = ({ selectedItem, onSave, onCancel, isEditing }) => {
  if (!selectedItem) return <div className="details-component">Details</div>;

  console.log("Selected item in Details: ", selectedItem);

  return (
    
      <div className="details-component">
        <div className="title">Details</div>
        <TerminForm
          onSave={onSave}
          onCancel={onCancel}
          selectedItem={selectedItem}
          disableFields={!isEditing}
        />
      </div>
   
  );
};

export default Details;

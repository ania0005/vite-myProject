import React from "react";
import "../../index.css";
import TerminForm from "./TerminForm";
import styled from "styled-components";

const Styles = styled.div`
  .details-component {
    width: 100%;
  }
  .title {
    margin-bottom: 10px;
  } 
`;

const Details = ({ selectedItem, onSave, onCancel, isEditing }) => {
  if (!selectedItem) return <div className="details-component">Details</div>;

  console.log("Selected item in Details: ", selectedItem);

  return (
    <Styles>
      <div className="details-component">
        <div className="title">Details</div>
        <TerminForm
          onSave={onSave}
          onCancel={onCancel}
          selectedItem={selectedItem}
          disableFields={!isEditing}
        />
      </div>
    </Styles>
  );
};

export default Details;

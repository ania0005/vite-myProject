import { Button, Icon, MenuItem } from "@blueprintjs/core";
import { Select } from "@blueprintjs/select";
import { useState } from "react";
import "../../index.css";
import { URL_END, URL_START } from "./Weather";

const citiesData = [
  { id: 1, title: "Berlin", temp: 0, wind: 0, weather: "Sunny" },
  { id: 2, title: "Hamburg", temp: 5, wind: 4, weather: "Sunny" },
  { id: 3, title: "Munich", temp: 6, wind: 12, weather: "Sunny" },
  { id: 4, title: "Velten", temp: 22, wind: 16, weather: "Sunny" },
  { id: 5, title: "Dnipro", temp: 35, wind: 8, weather: "Sunny" },
];

const SelectCity = ({ onItemSelect }) => {
  const [query, setQuery] = useState("");

  const renderCity = (item, { handleClick, modifiers }) => {
    return (
      <MenuItem
roleStructure="listoption"
        key={item.title}
        text={item.title}
        onClick={handleClick}
        active={modifiers.active}
      />
    );
  };

  const filteredCity = (query, item) => {
    return item.title.toLowerCase().indexOf(query.toLowerCase()) >= 0;
  };

  const createCity = async (str) => {
    try {
      const response = await fetch(
        `${URL_START}${str.toLowerCase()}${URL_END}`
      );
      if (response.status === 200) {
        const newCity = {
          title: str,
          temp: null,
          wind: null,
          weather: "",
        };
        onItemSelect(newCity);
     
      } else {
        alert("Stadt nicht gefunden");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const renderCreateCityOption = (query, active, handleClick) => {
    const correctQuery = query.charAt(0).toUpperCase() + query.slice(1);
    
    return (
      <MenuItem
      
        icon="add"
            text={` ${correctQuery}`}
        active={active}
        onClick={() => {
          createCity(correctQuery);
        
        }}
        shouldDismissPopover={true}
      />
    );
  };

  return (
    <>
      <Select
        items={citiesData}
        itemRenderer={renderCity}
        itemPredicate={filteredCity}
        createNewItemFromQuery={() => {
          return query;
        }}
        onQueryChange={(value) => {
          setQuery(value);
        }}
        createNewItemRenderer={renderCreateCityOption}
        onItemSelect={onItemSelect}
      >
        <Button
        style={{ backgroundColor: "#0077cc", color: "white" }}
          className="select-button"
          text={"Select city"}
          rightIcon={<Icon icon="caret-down" style={{ color: "white" }} />} /* Здесь задаем белый цвет для иконки */
  intent="none"
        />
      </Select>
    </>
  );
};

export default SelectCity;




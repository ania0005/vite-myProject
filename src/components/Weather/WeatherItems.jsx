import React from "react";
import WeatherItem from "./WeatherItem";
import "./Weather.css";


const WeatherItems = ({ selectedCities, onDelete }) => {
  return (
    <div className="weather-content"> 
      {selectedCities.length > 0 ? (
        selectedCities.map((item) => (
          <WeatherItem key={item.id} item={item} onDelete={onDelete} /> 
        ))
      ) : (
        <div>Add a city
</div>
      )}
    </div>
  );
};

export default WeatherItems;


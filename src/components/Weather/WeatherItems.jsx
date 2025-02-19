// src/components/weather/WeatherItems.jsx
import React from "react";
import WeatherItem from "./WeatherItem";
import "../../index.css";

const WeatherItems = ({ selectedCities, onDelete }) => {
  return (
    <div className="weather-content"> {/* Изменено на className="weather-content" */}
      {selectedCities.length > 0 ? (
        selectedCities.map((item) => (
          <WeatherItem key={item.id} item={item} onDelete={onDelete} /> // Убедитесь, что у каждого элемента есть уникальный id
        ))
      ) : (
        <div>No cities added yet</div>
      )}
    </div>
  );
};

export default WeatherItems;



import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../../features/weatherSlice";
import SelectCity from "./SelectCity";
import WeatherItems from "./WeatherItems";
import "../../index.css";


export const URL_START = "https://wttr.in/";
export const URL_END = "?format=%t+%w+%C&lang=de";

const Weather = () => {
  const dispatch = useDispatch();
  const citiesWeather = useSelector((state) => state.citiesWeather.items);

  const handleAddSelectedCity = (newCity) => {
    // Добавляем новый город только если его нет в списке
    if (!citiesWeather.some((city) => city.title === newCity.title)) {
      dispatch(addItem({ ...newCity, id: Date.now() })); // Добавление уникального id
    } else {
      alert(`${newCity.title} уже добавлен.`);
    }
  };

  const handleCityDelete = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <div className="weather-container">
      <div className="weather-header">
        <SelectCity onItemSelect={handleAddSelectedCity} />
      </div>
      <div className="weather-items">
        <WeatherItems selectedCities={citiesWeather} onDelete={handleCityDelete} />
      </div>
    </div>
  );
};

export default Weather;





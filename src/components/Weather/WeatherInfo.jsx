import { Icon, Intent, ProgressBar, Spinner } from "@blueprintjs/core";
import { useEffect, useState } from "react";
import "./Weather.css";
import { URL_END, URL_START } from "./Weather";

const WeatherInfo = ({ item }) => {
  const [weatherData, setWeatherData] = useState({
    temp: "no data",
    wind: "no data",
    weather: "no data",
  });
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const loadingData = async () => {
    if (item.title) {
      try {
        setLoading(true);
        const response = await fetch(
          `${URL_START}${item.title.toLowerCase()}${URL_END}`
        );
        
        if (response.status === 200) {
          const weatherInfo = await response.text();
          const parts = weatherInfo.split(" ");
          const temp = parts[0];
          const wind = parts[1];
          const weather = parts.slice(2).join(" ");

          setWeatherData({ temp, wind, weather });
        } else {
          console.log("City not found");
        }
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    loadingData();
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 0.05;
        if (newProgress >= 1.001) {
          loadingData();
        }
        return newProgress >= 1.001 ? 0 : newProgress;
      });
    }, 1000);
    return () => clearInterval(progressInterval);
  }, []);

  const parseTemperature = (tempStr) => {
    const parsedTemp = parseFloat(tempStr.replace(/[^\d.-]/g, ""));
    return isNaN(parsedTemp) ? null : parsedTemp;
  };

  const tempValue = parseTemperature(weatherData.temp);

  const renderContent = () => {
    if (loading) {
      return <Spinner className="spinner" intent={Intent.PRIMARY} />;
    } else {
      return (
        <div>
          <div className="item">
            <Icon icon="temperature" size={12} intent="primary" />
            {weatherData.temp || "no data"}
            {tempValue !== null && tempValue < 15 ? (
              <Icon icon="snowflake" size={12} intent="primary" />
            ) : tempValue !== null && tempValue < 25 ? (
              <Icon icon="cloud" size={12} intent="primary" />
            ) : tempValue !== null ? (
              <Icon icon="flash" size={12} intent="primary" />
            ) : null}
          </div>
          <div className="item">
            <Icon icon="wind" size={12} intent="primary" />{" "}
            {weatherData.wind || "no data"}
          </div>
          <div className="item">
            <Icon icon="cloud" size={12} intent="primary" />{" "}
            {weatherData.weather || "no data"}
          </div>
          <div className="item"style={{marginTop:"5px"}}>
            <ProgressBar intent="primary" value={progress} />
          </div>
        </div>
      );
    }
  };

  return <div>{renderContent()}</div>;
};

export default WeatherInfo;

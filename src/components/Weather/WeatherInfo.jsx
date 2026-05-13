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
    if (!item?.title) return;

    try {
      setLoading(true);

      const response = await fetch(
        `${URL_START}${encodeURIComponent(item.title.toLowerCase())}${URL_END}`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();

      const current = data.current_condition?.[0];

      if (!current) {
        throw new Error("No weather data");
      }

      const temp = `${current.temp_C}°C`;
      const wind = `${current.windspeedKmph} km/h`;
      const weather =
        current.lang_de?.[0]?.value ||
        current.weatherDesc?.[0]?.value ||
        "no data";

      setWeatherData({ temp, wind, weather });
    } catch (error) {
      console.log(error.message);

      setWeatherData({
        temp: "no data",
        wind: "no data",
        weather: "no data",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadingData();

    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 0.05;

        if (newProgress >= 1.001) {
          loadingData();
          return 0;
        }

        return newProgress;
      });
    }, 1000);

    return () => clearInterval(progressInterval);
  }, [item.title]);

  const parseTemperature = (tempStr) => {
    const parsedTemp = parseFloat(tempStr.replace(/[^\d.-]/g, ""));
    return isNaN(parsedTemp) ? null : parsedTemp;
  };

  const tempValue = parseTemperature(weatherData.temp);

  const renderContent = () => {
    if (loading) {
      return <Spinner className="spinner" intent={Intent.PRIMARY} />;
    }

    return (
      <div>
        <div className="item">
          <Icon icon="temperature" size={12} intent="primary" />{" "}
          {weatherData.temp}

          {tempValue !== null && tempValue < 15 ? (
            <Icon icon="snowflake" size={12} intent="primary" />
          ) : tempValue !== null && tempValue < 25 ? (
            <Icon icon="cloud" size={12} intent="primary" />
          ) : tempValue !== null ? (
            <Icon icon="flash" size={12} intent="primary" />
          ) : null}
        </div>

        <div className="item">
          <Icon icon="wind" size={12} intent="primary" /> {weatherData.wind}
        </div>

        <div className="item">
          <Icon icon="cloud" size={12} intent="primary" />{" "}
          {weatherData.weather}
        </div>

        <div className="item" style={{ marginTop: "5px" }}>
          <ProgressBar intent="primary" value={progress} />
        </div>
      </div>
    );
  };

  return <div>{renderContent()}</div>;
};

export default WeatherInfo;

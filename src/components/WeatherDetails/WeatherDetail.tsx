import { WeatherInfo } from "../../hooks/useWeather";
import { kevinToCelsius } from "../../utils";
import styles from "./WeatherDetail.module.css";
type WeatherDetailProps = {
  weather: WeatherInfo;
};
export const WeatherDetail = ({ weather }: WeatherDetailProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.city}>{weather.name}</h2>
      <div className={styles.weather_details}>
        <p className={styles.temp}>{kevinToCelsius(weather.main.temp) + "°C"}</p>
        <p className={styles.like}>Feels Like: {kevinToCelsius(weather.main.feels_like) + "°C"}</p>
        <p className={styles.humidty}>Humidity: {kevinToCelsius(weather.main.humidity) + "%"}</p>
        <div className={styles.min_max}>
          <p>Min: {kevinToCelsius(weather.main.temp_min) + "°C"}</p>
          <p>Max: {kevinToCelsius(weather.main.temp_max) + "°C"}</p>
        </div>
      </div>
    </div>
  );
};

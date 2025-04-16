import { ClipLoader } from "react-spinners";
import styles from "./App.module.css";
import { Form } from "./components/Form/Form";
import { WeatherDetail } from "./components/WeatherDetails/WeatherDetail";
import { useWeather } from "./hooks/useWeather";
import { NotFound } from "./components/NotFound/NotFound";

function App() {
  const { fetchWeather, weather, hasWeatherData, isLoading, notFound } =
    useWeather();

  return (
    <div>
      <h1 className={styles.title}>Breezy</h1>

      <div className={styles.container}>
        <div className={styles.flex_item}>
          <Form fetchWeather={fetchWeather} />
        </div>
        <div className={styles.flex_item}>
          {hasWeatherData && <WeatherDetail weather={weather} />}
          {notFound && <NotFound />}

          <ClipLoader
            loading={isLoading}
            color="#ffff"
            speedMultiplier={2}
            cssOverride={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

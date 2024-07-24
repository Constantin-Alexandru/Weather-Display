import "../styles/components/WeatherIcon.css";
import { getWeatherCodeData } from "../utilities/weather_codes";

export function WeatherIcon({
  weatherCode = getWeatherCodeData(0, false),
  alt = false,
}) {
  return (
    <div className={`weather-icon-container ${alt && "alt-background"}`}>
      <img
        src={weatherCode.image}
        alt={weatherCode.description}
        className="weather-icon"
      />
      <h3 className="weather-icon-description">{weatherCode.description}</h3>
    </div>
  );
}

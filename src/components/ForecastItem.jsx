import "../styles/components/ForecastItem.css";

export function ForecastItem({ item }) {
  return (
    <div className="forecast-item">
      <img
        src={item.weatherCode.image}
        alt={item.weatherCode.description}
        className="forecast-icon"
      />
      <h1 className="temperature">{item.temperature}°C</h1>
      <p className="time">
        {item.time.hour}:{item.time.minute}
      </p>
    </div>
  );
}

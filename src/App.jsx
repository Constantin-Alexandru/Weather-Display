import { WeatherIcon } from "./components/WeatherIcon";
import { FeaturedData } from "./components/FeaturedData";
import { MainData } from "./components/MainData";

import "./App.css";
import { TimeData } from "./components/TimeData";
import { fetchData } from "./utilities/fetchData";

import { useState, useEffect } from "react";
import { Forecast } from "./components/Forecast";
import { destructureDate } from "./utilities/time_data";

function App() {
  const [data, setData] = useState(undefined);

  function updateDate(date) {
    setData((previousData) => ({ ...previousData, time: date }));
  }

  useEffect(() => {
    let timerID = setInterval(() => {
      const date = destructureDate(new Date());

      updateDate(date);

      if (date.minute % 30 === 0 && parseInt(date.second, 10) === 0) {
        fetchData()
          .then((res) => {
            setData(res);
          })
          .catch((error) => console.error(error));
      }
    });
    fetchData()
      .then((res) => {
        setData({ ...res, time: destructureDate(new Date()) });
      })
      .catch((error) => console.error(error));

    return () => clearInterval(timerID);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (data === undefined) {
    return;
  } else {
    return (
      <div className="app">
        <div className="featured-data">
          {data.time.year}
          <FeaturedData city={"Sinaia"} />
        </div>

        <div className="temperature-display">
          <WeatherIcon weatherCode={data.weatherCode} isNight={data.isNight} />
        </div>
        <div className="main-data">
          <MainData
            temperature={data.temperature}
            apparent_temperature={data.apparentTemperature}
          />
        </div>
        <div className="time-data">
          <TimeData time={data.time} />
        </div>
        <div className="forecast">
          <Forecast forecast={data.hourlyData} />
        </div>
      </div>
    );
  }
}

export default App;

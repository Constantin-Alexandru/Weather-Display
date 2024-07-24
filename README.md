REACT WEATHER APP
=================

This project implements a small weather app that displays the current weather (updated every 30 minutes).
The working version of the project is available under the [Final Version](https://github.com/Constantin-Alexandru/weather-display/tree/final-version) branch.
The main branch contains most of the components without any data passed to them and the data fetching.

## Project Scope

This project was made for the [Code Sinaia 2024](https://inproted.org/page14.html) programming school.
The aim of this project is to help students get introduced in the world of React.

## Project Aims

The aims of this project is to introduce students into React components & props. As such, they will be tasked with creating a custom component,
adding props to the current existing components and adding the data into the code to display.
In addition, they will be tasked with creating their own component to display the hourly forecast.

## Documentation

The following section will be a small documentation for the students to know the structure of the data that they need to read.

### Data

The main object is called `data` and has the following properties:

- time: a [time](#time) object.
- temperature: current temperature (in Celsius).
- apparentTemperature: the current felt temperature (in Celsius).
- isNight: weather it is considered night or day.
- weatherCode: the current weather code + image to represent said code.
  - code: the number code based on [WMO Weather Interpretation Codes](https://open-meteo.com/en/docs#weathervariables).
  - description: the description of the code.
  - image: the image that represents the code.
- hourlyData: the data for each hour of the day (the forecast day starts at 3AM).
  - time: the time of day for the forecast as a [time](#time) object.
  - temperature: current temperature (in Celsius).
  - apparentTemperature: the current felt temperature (in Celsius).
  - weatherCode: the current weather code + image to represent said code.
    - code: the number code based on [WMO Weather Interpretation Codes](https://open-meteo.com/en/docs#weathervariables).
    - description: the description of the code.
    - image: the image that represents the code.

### Time

The `time` object contains the date & time and has the following properties:

- year
- month
- day
- hour
- minute
- second

## References

Weather Descriptions and Icons data:  <https://gist.github.com/stellasphere/9490c195ed2b53c707087c8c2db4ec0c>

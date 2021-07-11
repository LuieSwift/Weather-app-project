import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Leeds",
    temperature: 26,
    date: "Sunday 10:00",
    description: "Sunny",
    imgUrl: "images/icons/01d.svg",
    humidity: 80,
    wind: 5,
    high: 26,
    low: 15,
    day: "Mon"
  };

  return (
    <div className="Searchcity">
      <form id="search-city">
        <div className="mb-3">
          <input
            placeholder="Enter a city"
            className="form-control"
            id="city-input"
            autoComplete="off"
            autoFocus="on"
            type="search"
          />
        </div>
      </form>
      <a href role="button">
        <button
          type="click"
          className="btn-success"
          id="current-location-button"
        >
          <img src="images/GPS.png" alt="GPS" width="50%" />
        </button>
      </a>
      <h1 id="city">{weatherData.city}</h1>
      <div className="circle">
        <img
          src={weatherData.imgUrl}
          id="icon"
          alt="icon"
          width="150"
          height="150"
        />
        <span className="text">
          <h3 id="temp">
            <strong>{weatherData.temperature}</strong>
          </h3>
          <span className="units">
            <a
              STYLE="text-decoration:none"
              href="/"
              id="celsius-link"
              class="active"
            >
              °C
            </a>
            |
            <a STYLE="text-decoration:none" href="/" id="fahrenheit-link">
              °F
            </a>
          </span>
          <br />
          <p id="date">{weatherData.date}</p>
        </span>
      </div>
      <div className="row">
        <div class="col-4">
          <em>Conditions:</em>
          <p id="description">{weatherData.description}</p>
        </div>
        <div class="col-4">
          <em>Humidity:</em>
          <p id="humidity">{weatherData.humidity}</p>
        </div>
        <div className="col-4">
          <em>Wind:</em>
          <p id="windspeed">{weatherData.wind}</p>
        </div>
      </div>
      <hr />
      <div className="weather-forecast" id="forecast">
        <div className="row">
          <div className="col-2">
            <span className="weather-forecast-date">{weatherData.day}</span>
            <br />
            <img src={weatherData.imgUrl} alt="icons" />
            <br />
            <span className="weather-forecast-temperature-max"></span>
            {weatherData.high}/
            <span className="weather-forecast-temperature-min">
              {weatherData.low}°C
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";

const Country = ({ country, isShowWeather }) => {
  const [temp, setTemp] = useState("");
  const [wind, setWind] = useState("");

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=d56cf290af651470a2845f17d92e357c&query=${country.name}`
      )
      .then((response) => {
        let current = response.data.current;
        setWind(`${current.wind_speed} mph direction ${current.wind_dir}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h2>Languages</h2>
      <ul>
        {country.languages.map((lang) => (
          <li key={lang.name}>{lang.name}</li>
        ))}
      </ul>
      {isShowWeather ? (
        <div>
          <h2>Weather in {country.name}</h2>
          <p>Temprature: {temp} Celcius</p>
          <p>Wind:{wind}</p>
        </div>
      ) : (
        ""
      )}
      <img src={country.flag} alt={`${country.name}'s flage`} />
    </div>
  );
};
export default Country;

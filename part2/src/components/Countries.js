import React, { useState } from "react";
import Country from "./Country";

const Countries = ({ countries }) => {
  const [countryToShow, setCountryToShow] = useState("");

  const changeCountryView = (name) => {
    setCountryToShow(name);
  };
  return (
    <div>
      {countries.length === 1 ? (
        <Country country={countries[0]} isShowWeather={true} />
      ) : (
        <ul>
          {countries.map((country) => (
            <li key={country.name}>
              {country.name}

              <button onClick={(e) => changeCountryView(country.name)}>
                show
              </button>
              {countryToShow === country.name && <Country country={country} />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Countries;

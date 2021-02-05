import React from "react";
import Country from "./Country";

const Countries = ({ countries }) => {
  return (
    <div>
      {countries.length === 1 ? (
        <Country country={countries[0]} />
      ) : (
        <ul>
          {countries.map((country) => (
            <li key={country.name}>{country.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Countries;

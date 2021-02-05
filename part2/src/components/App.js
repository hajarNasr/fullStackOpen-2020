import React, { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./Countries";
import { filterObjects } from "./helpers";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState([]);
  //const [moreThan10Error, setMoreThan10Error] = useState(null);
  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        let data = filterObjects(response.data, searchTerm);
        setCountries(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchTerm]);

  const changeSearchTerm = (event) => setSearchTerm(event.target.value);

  return (
    <div>
      <h2>Countries</h2>
      <div>
        <span>Find countries: </span>
        <input
          value={searchTerm}
          onChange={changeSearchTerm}
          placeholder="Enter country"
        />
      </div>
      {searchTerm ? (
        countries.length === 0 ? (
          <p>No countries matched your search.</p>
        ) : countries.length > 10 ? (
          <p>Too many matches, specify another filter</p>
        ) : (
          <Countries countries={countries} />
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default App;

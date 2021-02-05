import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import { isAdded, filterPersons } from "./helpers";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => {
        setPersons(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const changeName = (e) => setNewName(e.target.value);
  const changePhone = (e) => setNewPhone(e.target.value);
  const changeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
    setPersons(filterPersons(persons, e.target.value));
  };

  const addName = (e) => {
    e.preventDefault();

    if (isAdded(persons, newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons([...persons, { name: newName, phone: newPhone }]);
      setNewName("");
      setNewPhone("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchTerm={searchTerm} onChangeSearchTerm={changeSearchTerm} />

      <h3>Add New Person</h3>
      <PersonForm
        name={newName}
        phone={newPhone}
        onChangeName={changeName}
        onChangePhone={changePhone}
        onSubmit={addName}
      />

      <h3>Numbers</h3>
      <Persons persons={persons} />
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import { getAllPersons, addPerson } from "./personsServices";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import { isAdded, filterObjects } from "./helpers";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAllPersons()
      .then((persons) => {
        setPersons(filterObjects(persons, searchTerm));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchTerm]);

  const changeName = (e) => setNewName(e.target.value);
  const changePhone = (e) => setNewPhone(e.target.value);
  const changeSearchTerm = (e) => setSearchTerm(e.target.value);

  const addName = (e) => {
    e.preventDefault();

    if (isAdded(persons, newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      addPerson({ name: newName, number: newPhone }).then((newPerson) => {
        setPersons(persons.concat(newPerson));
        setNewName("");
        setNewPhone("");
      });
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

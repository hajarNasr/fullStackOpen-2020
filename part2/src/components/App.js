import React, { useState, useEffect } from "react";
import {
  getAllPersons,
  addPerson,
  deletePerson,
  updatePhoneNumber,
} from "./personsServices";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import { getPerson, filterObjects } from "./helpers";

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

    if (getPerson(persons, newName)) {
      if (
        window.confirm(
          `${newName} is already added to phonebook. Want to update their phone's number?`
        )
      ) {
        const thePerson = getPerson(persons, newName);
        const updatedPerson = { ...thePerson, number: newPhone };

        updatePhoneNumber(thePerson.id, updatedPerson).then((returnedPerson) =>
          setPersons(
            persons.map((person) =>
              person.id !== returnedPerson.id ? person : returnedPerson
            )
          )
        );
      }
    } else {
      addPerson({ name: newName, number: newPhone }).then((newPerson) => {
        setPersons(persons.concat(newPerson));
        setNewName("");
        setNewPhone("");
      });
    }
  };
  const delPerson = (id) => {
    if (window.confirm("You sure you want to delete this person?")) {
      deletePerson(id).then((response) => {
        setPersons(persons.filter((person) => person.id !== id));
        alert(`Person with id: ${id} was successfuly deleted.`);
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
      <Persons persons={persons} onDeletePerson={delPerson} />
    </div>
  );
};

export default App;

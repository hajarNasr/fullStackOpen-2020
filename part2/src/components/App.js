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
import Notification from "./Notification";
import { getPerson, filterObjects } from "./helpers";

const App = () => {
  let initalMessage = { type: "", content: "" };

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState(initalMessage);

  useEffect(() => {
    getAllPersons().then((persons) => {
      setPersons(filterObjects(persons, searchTerm));
    });

    if (message.type) {
      setTimeout(() => {
        setMessage(initalMessage);
      }, 2000);
    }
  }, [searchTerm, message]);

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

        updatePhoneNumber(thePerson.id, updatedPerson).then(
          (returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== returnedPerson.id ? person : returnedPerson
              )
            );
            setMessage({
              type: "success",
              content: `${newName}'s phone number was add successfully updated.`,
            });
          }
        );
      }
    } else {
      addPerson({ name: newName, number: newPhone }).then((newPerson) => {
        setPersons(persons.concat(newPerson));
        setNewName("");
        setNewPhone("");
        setMessage({
          type: "success",
          content: `${newName} was add successfully your notebook.`,
        });
      });
    }
  };
  const delPerson = (id) => {
    if (window.confirm("You sure you want to delete this person?")) {
      deletePerson(id)
        .then((response) => {
          setPersons(persons.filter((person) => person.id !== id));
          setMessage({
            type: "success",
            content: `Successfully deleted.`,
          });
        })
        .catch((err) => {
          setMessage({
            type: "error",
            content:
              "The person you're trying to delete has already been removed from the server.",
          });
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

      {message.type && <Notification msg={message} />}
    </div>
  );
};

export default App;

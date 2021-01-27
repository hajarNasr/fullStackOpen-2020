import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: 123456 },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const changeName = (e) => setNewName(e.target.value);
  const changePhone = (e) => setNewPhone(e.target.value);

  const isAdded = (name) =>
    persons.find((person) => person.name.toLowerCase() === name.toLowerCase());

  const addName = (e) => {
    e.preventDefault();

    if (isAdded(newName)) {
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
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={changeName} />
        </div>
        <div>
          phone: <input value={newPhone} onChange={changePhone} />
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>
            {person.name} {person.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

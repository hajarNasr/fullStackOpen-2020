import React from "react";

const Persons = ({ persons, onDeletePerson }) => (
  <ul>
    {persons.map((person, i) => (
      <li key={`${person.name} ${i}`}>
        <span>
          {person.name} {person.number}
        </span>
        <button onClick={() => onDeletePerson(person.id)}>delete</button>
      </li>
    ))}
  </ul>
);
export default Persons;

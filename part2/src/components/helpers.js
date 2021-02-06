export const lowerCase = (input) => input.toLowerCase();

export const isAdded = (persons, newName) =>
  persons.find((person) => lowerCase(person.name) === lowerCase(newName));

export const filterObjects = (objects, searchTerm) =>
  objects.filter((obj) => lowerCase(obj.name).includes(lowerCase(searchTerm)));

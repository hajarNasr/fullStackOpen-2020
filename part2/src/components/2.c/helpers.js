export const people = [
  { name: "Arto Hellas", phone: "040-123456" },
  { name: "Ada Lovelace", phone: "39-44-5323523" },
  { name: "Dan Abramov", phone: "12-43-234345" },
  { name: "Mary Poppendieck", phone: "39-23-6423122" },
];
export const lowerCase = (input) => input.toLowerCase();

export const isAdded = (persons, newName) =>
  persons.find((person) => lowerCase(person.name) === lowerCase(newName));

export const filterObjects = (objects, searchTerm) =>
  objects.filter((obj) => lowerCase(obj.name).includes(lowerCase(searchTerm)));

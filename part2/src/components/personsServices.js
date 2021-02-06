import axios from "axios";

const apiURL = "http://localhost:3001/persons";

const getAllPersons = () => {
  const request = axios.get(apiURL);
  return request.then((response) => response.data);
};

const addPerson = (newPerson) => {
  const request = axios.post(apiURL, newPerson);
  return request.then((response) => response.data);
};

const updatePhoneNumber = (id, updatedPerson) => {
  const request = axios.put(`${apiURL}/${id}`, updatedPerson);
  return request.then((response) => response.data);
};
const deletePerson = (id) => {
  const request = axios.delete(`${apiURL}/${id}`);
  return request.then((response) => response.data);
};

export { getAllPersons, addPerson, deletePerson, updatePhoneNumber };

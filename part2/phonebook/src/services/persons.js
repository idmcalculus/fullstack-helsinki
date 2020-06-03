import axios from 'axios';

const baseUrl = 'http://localhost:3004/persons';

const getPersons = async () => {
	const request = await axios.get(baseUrl);
	return request.data;
};

const createPerson = async newPerson => {
	const request = await axios.post(baseUrl, newPerson);
	return request.data;
};

const updatePerson = async (id, newPerson) => {
	const request = await axios.put(`${baseUrl}/${id}`, newPerson);
	return request.data;
};

const deletePerson = async id => {
	return await axios.delete(`${baseUrl}/${id}`);
};

export default {getPersons, createPerson, updatePerson, deletePerson};
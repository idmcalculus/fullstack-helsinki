import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';

const App = () => {
  const [ persons, setPersons ] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(()=>{
	axios
	.get('http://localhost:3004/persons')
	.then(response => {
		setPersons(response.data);
	})
	.catch(error => console.log(error));
}, []);

  const addName = (event) => {
	  event.preventDefault();
	  const nameObject = {
		  name: newName,
		  number: newNumber,
		  id: persons.length + 1
	  };

	  const foundPerson = persons.find(person => person.name === newName);

	  if (foundPerson) {
		  alert(`${newName} is already added to phonebook`);
	  } else {
		setPersons(persons.concat(nameObject));
	  }

	  setNewName('');
	  setNewNumber('');
  };

  const handleNewName = (event) => {
	  setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
	setNewNumber(event.target.value);
  };

  const handlefilter = (event) => {
	  setFilter(event.target.value);
  };

  const showPersons = !filter? persons : (
	  persons.filter(person => person.name.toLowerCase().includes(filter))
	  );



  return (
    <div>
		<h1>Phonebook</h1>
		<Filter 
			filter={filter} handlefilter={handlefilter}
		/>
		<h2>Add a new</h2>
		<PersonForm 
			addName={addName} newName={newName} newNumber={newNumber}
			handleNewName={handleNewName} handleNewNumber={handleNewNumber}
		/>
		<h2>Numbers</h2>
		<Persons showPersons={showPersons} />
    </div>
  )
}

export default App
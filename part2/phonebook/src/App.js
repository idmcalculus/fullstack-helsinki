import React, { useState } from 'react';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [ newName, setNewName ] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

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
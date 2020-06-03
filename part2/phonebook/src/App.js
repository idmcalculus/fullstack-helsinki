import React, { useState, useEffect } from 'react';
import personService from './services/persons';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Notification from './components/Notification';

const App = () => {
  const [ persons, setPersons ] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [ errorMessage, setErrorMessage ] = useState(null);
  const [ successMessage, setSuccessMessage ] = useState(null)

  useEffect(()=>{
	personService
	.getPersons()
	.then(initialData => {
		setPersons(initialData);
	})
	.catch(error => {
		setErrorMessage(
			`There was an error retrieving the phonebook from server, please try again later`
		  );
		  setTimeout(() => {
			setErrorMessage(null);
		  }, 5000);
	});
  }, []);

  const addName = (event) => {
	  event.preventDefault();
	  const nameObject = {
		  name: newName,
		  number: newNumber
	  };

	  const foundPerson = persons.find(person => person.name === newName);

	  if (foundPerson) {
		  if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
			  personService
			  .updatePerson(foundPerson.id, nameObject)
			  .then(newData => {
				  setSuccessMessage(`Updated ${newName}`);
				  setTimeout(() => {
					setSuccessMessage(null);
				  }, 5000);
				  setPersons(persons.map(person => person.name !== foundPerson.name ? person : newData));
				})
			  .catch(error => {
				setErrorMessage(
					`${newName} was already removed from server`
				  );
				  setTimeout(() => {
					setErrorMessage(null);
				  }, 5000);
				setPersons(persons.filter(person => person.id !== foundPerson.id));
				});
		  }
	  } else {
			personService
			.createPerson(nameObject)
			.then(newData => {
				setSuccessMessage(`Added ${newData.name}`);
				setTimeout(() => {
					setSuccessMessage(null);
				  }, 5000);
				setPersons(persons.concat(newData));
			})
			.catch(error => {
				setErrorMessage(
					`There was an error adding ${newName} to the phonebook`
				  );
				  setTimeout(() => {
					setErrorMessage(null);
				  }, 5000);
			});
	  }

	  setNewName('');
	  setNewNumber('');
  };

  const deleteName = (id) => {
	const foundPerson = persons.find(person => id === person.id);
	if (window.confirm(`Delete ${foundPerson.name}?`)) {
		personService
		.deletePerson(id)
		.then(response => {
			if (response) {
				setPersons(persons.filter(person => id !== person.id));
			}
		})
		.catch(error => {
			setErrorMessage(
				`${foundPerson.name} was already removed from server`
			  );
			  setTimeout(() => {
				setErrorMessage(null);
			  }, 5000);
			setPersons(persons.filter(person => person.id !== id));
		});
	}
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
	  persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
	  );

  return (
    <div>
		<h1>Phonebook</h1>
		<Notification errorMessage={errorMessage} successMessage={successMessage} />
		<Filter 
			filter={filter} handlefilter={handlefilter}
		/>
		<h2>Add a new</h2>
		<PersonForm 
			addName={addName} newName={newName} newNumber={newNumber}
			handleNewName={handleNewName} handleNewNumber={handleNewNumber}
		/>
		<h2>Numbers</h2>
		<Persons showPersons={showPersons} deletePerson={deleteName} />
    </div>
  )
}

export default App
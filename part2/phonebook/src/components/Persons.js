import React from 'react';

const Persons = ({ showPersons, deletePerson }) => {
	return (showPersons.map(person => {
		return (
			<div key={person.id} className='person'>
				<span>{person.name}</span> &nbsp;
				<span>{person.number}</span> &nbsp;
				<button onClick={()=>deletePerson(person.id)}>delete</button>
			</div>
		)
		})
	)
}

export default Persons;
import React from 'react';

const Persons = ({ showPersons }) => {
	return (showPersons.map(person => {
		return (
			<div key={person.id}>
				<span>{person.name}</span> &nbsp;
				<span>{person.number}</span>
			</div>
		)
		})
	)
}

export default Persons;
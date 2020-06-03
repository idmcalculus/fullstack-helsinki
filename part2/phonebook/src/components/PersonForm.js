import React from "react";

const PersonForm = ({addName, newName, handleNewName, newNumber, handleNewNumber}) => {
	return (
		<form onSubmit={addName} >
			<div className='personform'>
				name: <input value={newName}
				onChange={handleNewName} />
			</div>
			<div className='personform'>
				number: <input value={newNumber}
				onChange={handleNewNumber} />
			</div>
			<div className='personform'>
				<button type="submit">add</button>
			</div>
		</form>
	)
}

export default PersonForm;
import React from 'react';

const Filter = ({filter, setValue}) => {

	const handleFilter = (event) => {
		setValue(event.target.value);
	};

	return (
		<div>
			<span>find countries </span>
			<input value={filter}
				onChange={handleFilter}
			/>
		</div>
	)
};

export default Filter;
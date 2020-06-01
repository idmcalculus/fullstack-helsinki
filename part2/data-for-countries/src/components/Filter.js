import React from 'react';

const Filter = ({filter, handleFilter}) => {
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
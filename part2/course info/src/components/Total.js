import React from 'react';

const Total = ({ course }) => {
	return (
		<p>Number of exercises {course.parts.reduce((sum, {exercises}) => sum + exercises, 0)}</p>
	)
}

export default Total;
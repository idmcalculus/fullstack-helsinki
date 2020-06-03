import React from 'react';

const Notification = ({ errorMessage, successMessage }) => {
	if (errorMessage === null && successMessage === null) {
		return null;
	}

	return (
		<div className={`${ errorMessage === null ? 'error2' : 'error1' }`}>
			<p>{ errorMessage === null ? successMessage : errorMessage }</p>
		</div>
	)
}

export default Notification;
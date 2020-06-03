import React from 'react';

const Weather = ({ response, country }) => {
	if (response.length === 0) {
	  return null
	}
  
	return (
	  <div>
		<h3>{`Weather in ${country.capital}`}</h3>
			<p><strong>temperature: </strong>{response.current.temperature}</p>
			<br/>
			<div>
				<img alt={`weather icon of ${country.capital}`} src={response.current.weather_icons[0]} height={250} width={250}/>
			</div>
			<p><strong>wind: </strong>{response.current.wind_speed} mph direction {response.current.wind_dir}</p>
	  </div>
	)
}

export default Weather;
import React from 'react';

const Country = ({country, response}) => {

	return (
		<div>
			<h2>{country.name}</h2>
			<p>capital: {country.capital}</p>
			<p>population: {country.population}</p>
			<h3>languages</h3>
			{country.languages.map(language => <li key={language.nativeName}>{language.name}</li>)}
			<br/>
			<div>
				<img alt={`flag of ${country.name}`} src={country.flag} height={250} width={250}/>
			</div>
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

export default Country;
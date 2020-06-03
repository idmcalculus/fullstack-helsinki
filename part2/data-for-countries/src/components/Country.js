import React, {useState, useEffect} from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import Weather from './Weather';

dotenv.config();

const Country = ({country}) => {

	const [ apiResponse, setApiResponse ] = useState([]);
	const apiKey = process.env.REACT_APP_API_KEY;

	useEffect(()=>{
		axios
		.get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${country.capital}`)
		.then(response => {
			setApiResponse(response.data);
		})
		.catch(error => console.error(error));
	}, [apiKey, country.capital]);

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
			<Weather response={apiResponse} country={country} />
		</div>
	)
}

export default Country;
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import Filter from './components/Filter';
import Country from './components/Country';

dotenv.config();

const App = () => {

	const [ countries, setCountries ] = useState([]);
	const [ countryFilter, setCountryFilter ] = useState('');
	const [ show, setShow ] = useState(false);
	const [ valueCount, setValue ] = useState({
		value: null
	});
	const [ apiResponse, setApiResponse ] = useState([]);

	const apiKey = process.env.REACT_APP_API_KEY;

	useEffect(() => {
		axios
		.get('https://restcountries.eu/rest/v2/all')
		.then(response => {
			setCountries(response.data);
		})
		.catch(error => console.error(error));
	}, []);

	const handleFilter = (event) => {
		setCountryFilter(event.target.value);
	};

	const showCountries = countries.filter(({name}) => {
		return countryFilter.length > 0 ? name.toLowerCase().includes(countryFilter.toLowerCase()) : '';
	});

	const weather = (country) => {
		axios
		.get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${country.capital}`)
		.then(response => {
			setApiResponse(response.data);
		})
		.catch(error => console.error(error));
	};

	const handleShow = (country) => {
		setValue({value: country});
		weather(country);
		setShow(!show);
	};

	return (
		<div>
			<Filter filter={countryFilter} handleFilter={handleFilter} />
			<br/>
			<div>
				{
					showCountries.length > 10 ? <p>Too many matches, specify another filter</p> : 
					showCountries.length === 1 ? (
						showCountries.map(country => {
							weather(country);
							return <Country key={country.numericCode} country={country} response={apiResponse} />
						})
					) : (
						showCountries.map(country => {
							return (
								<div key={country.numericCode}>
									<span>{country.name}</span> &nbsp;
									<button onClick={()=>handleShow(country)}>show</button>
									<br/><br/>
								</div>
							)
						})
					)
				}
			</div>
			{show && <Country key={valueCount.value.numericCode} country={valueCount.value} response={apiResponse} />}
		</div>
	)
}

export default App;
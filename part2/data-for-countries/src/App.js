import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Countries from './components/Countries';
import Filter from './components/Filter';

const App = () => {

	const [ countries, setCountries ] = useState([]);
	const [ countryFilter, setCountryFilter ] = useState('');

	useEffect(() => {
		axios
		.get('https://restcountries.eu/rest/v2/all')
		.then(response => {
			setCountries(response.data);
		})
		.catch(error => console.error(error));
	}, []);

	const showCountries = countries.filter(({name}) => {
		return countryFilter.length > 0 ? name.toLowerCase().includes(countryFilter.toLowerCase()) : '';
	});

	return (
		<div>
			<Filter filter={countryFilter} setValue={setCountryFilter} />
			<br/>
			<Countries countries={showCountries} setValue={setCountryFilter} />
		</div>
	)
}

export default App;
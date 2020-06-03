import React from 'react';
import Country from './Country';

const Countries = ({countries, setValue}) => {

	if (countries.length === 0) {
		return (
		  <div>
			no matches
		  </div>
		)
	}

	return (
		<div>
			{
				countries.length > 10 ? 
				<p>Too many matches, specify another filter</p> : 
				countries.length === 1 ? (
					countries.map(country => {
						return <Country key={country.numericCode} country={country} />
					})
				) : 
				(
					countries.map(country => {
						return (
							<div key={country.numericCode}>
								<span>{country.name}</span> &nbsp;
								<button onClick={()=>setValue(country.name)}>show</button>
								<br/><br/>
							</div>
						)
					})
				)
			}
		</div>
	)
}

export default Countries;
import React from 'react';
import './index.css'
const Card = ({data}) => {

	return(
		<div className='cards'>
			<h1>{data.country}</h1>
			<p>Active: {data.active}</p>
			<p>Cases: {data.cases}</p>
	        <p>Death: {data.deaths}</p>
	        <p>Recovered: {data.recovered}</p>
	        <p>Today Cases: {data.todayCases}</p>
	        <p>Today Death: {data.todayDeaths}</p>
	        <p>Critical: {data.critical}</p>
	        <p>Total Tests: {data.totalTests}</p>
	        <p>Cases Per Million: {data.casesPerOneMillion}</p>
	        <p>Deaths Per Million: {data.deathsPerOneMillion}</p>
	        <p>Testes Per Million: {data.testsPerOneMillion}</p>
		</div>
	);
}

export default Card;
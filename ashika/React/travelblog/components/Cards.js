//Cards.js

import React from 'react';


export default function Cards(props) {
	return (
		<div className='card'>
			<section className='column-left'>
				<img className="card-img" src="./images/coverImg" alt="images" />
			</section>
			<section className='column-right'>
				<span className='material-symbols-outlined'>location_on</span>
				<span className="card-country">{props.item.country} </span>
				<a href={props.item.googleMapLink}>View on Google Maps</a>
				<h3 className="card-country-title">{props.item.title}</h3>
				<h4 className="card-date">{props.item.date}</h4>
				<p>{props.item.description}</p>
				<span>Read more..</span>
			</section>

		</div>
	)
}

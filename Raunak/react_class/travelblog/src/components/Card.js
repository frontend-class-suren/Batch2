import React from 'react';


export default function Cards(props) {
	return (
		<div className='card'>
			<section className='column-left'>
				<img className="card-img" src="https://th.bing.com/th/id/R.717b78c705787f55e1d7a5b3da9ca591?rik=UtxBUFy0ecx7aw&pid=ImgRaw&r=0" alt="images" />
			</section>
			<section className='column-right'>
				<span className='material-symbols-outlined'>Location_on </span>
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

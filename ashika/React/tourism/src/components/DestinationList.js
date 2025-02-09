// DestinationList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import destinations from './Destinations';

const List = styled.ul`
list-style: none;
padding: 0;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`;

const ListItem = styled.li`
margin-bottom: 20px;
text-align: center;
`;

const Image = styled.img`
width: 100%;
height: auto;
border-radius: 8px;
`;

const Button = styled.button`
background: #3498db;
color: #fff;
border: none;
padding: 5px 10px;
border-radius: 4px;
cursor: pointer;
`;

const DestinationList = () => {
	const [favorites, setFavorites] = useState([]);
	const toggleFavorite = (id) => {
		if (favorites.includes(id)) {
			setFavorites(
				favorites
					.filter(favId =>
						favId !== id)
			);
		} else {
			setFavorites([...favorites, id]);
		}
	};
	return (
		<div style={
			{
				backgroundColor: "#c8e2fa",
				padding: "2%"
			}
		}>
			<List>
				{destinations.map((destination) => (
					<ListItem key={destination.id}>
						<Link to={`/destination/${destination.id}`}
							style={
								{
									textDecoration: 'none',
									color: '#333'
								}}>
							<Image src={destination.image}
								alt={destination.name} />
							<h3>{destination.name}</h3>
							<h5>{destination.bestTime}</h5>
							<h6>{destination.rating}</h6>
						</Link>
						<Button onClick={
							() =>
								toggleFavorite(destination.id)
						}>
							{
								favorites.includes(destination.id) ?
									'Remove from Favorites' :
									'Add to Favorites'
							}
						</Button>
					</ListItem>
				))}
			</List>
		</div>
	);
};
export default DestinationList;

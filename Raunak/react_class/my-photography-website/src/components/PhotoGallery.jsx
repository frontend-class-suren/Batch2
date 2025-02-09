import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PhotoGallery = () => {
	
	const photos = [
'https://media.geeksforgeeks.org/wp-content/uploads/20240122102942/1a-(2).jpg',
'https://media.geeksforgeeks.org/wp-content/uploads/20240122102942/2b.jpg',
'https://media.geeksforgeeks.org/wp-content/uploads/20240122103211/13.jpg',
'https://media.geeksforgeeks.org/wp-content/uploads/20240122103211/15.jpg',
'https://media.geeksforgeeks.org/wp-content/uploads/20240122103210/12.jpg',
'https://media.geeksforgeeks.org/wp-content/uploads/20240122103210/14.jpg'
	];

	return (
		<div className="photo-gallery">
			{photos.map(
				(photo, index) => (
					<Link to={`/photo/${index}`}
						key={index}>
						<img src={photo}
							alt={`Photo ${index + 1}`} />
					</Link>
				))}
		</div>
	);
};

export default PhotoGallery;

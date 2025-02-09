import React from 'react';

function DestinationCard({ destination }) {
  return (
    <div className="destination-card">
      <img src={destination.image} alt={destination.name} />
      <h2>{destination.name}</h2>
      <p>{destination.description}</p>
      <p><strong>Best Time :</strong> {destination.bestTime}</p>
    </div>
  );
}

export default DestinationCard;
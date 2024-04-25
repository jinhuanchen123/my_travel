import React from 'react';
import './App.css';
const Event = ({ title, location, mapsLink, startDate, endDate, description, imageUrl }) => {
  return (
    <div className="event-card">
      <h2>{title}</h2>
      <p>{location}</p>
      <a href={mapsLink} target="_blank" rel="noopener noreferrer">Google Maps Link</a>
      <p>Start Date: {startDate}</p>
      <p>End Date: {endDate}</p>
      <p>{description}</p>
      <img src={imageUrl} alt={title} className="event-image" />
    </div>
  );
};

export default Event;

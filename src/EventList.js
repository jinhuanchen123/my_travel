import React from 'react';
import Event from './Event';

const EventList = ({ events }) => {
  return (
    <div className="event-list">
      {events.map(event => (
        <Event
          key={event.id}
          title={event.title}
          location={event.location}
          mapsLink={event.mapsLink}
          startDate={event.startDate}
          endDate={event.endDate}
          description={event.location === 'Honolulu' ? 'Event in Honolulu: ' + event.description : event.description}
          imageUrl={event.imageUrl}
        />
      ))}
    </div>
  );
};

export default EventList;


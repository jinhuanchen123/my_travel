import React from 'react';
import EventList from './EventList';

const App = () => {
  const events = [
    {
      id: 1,
      title: 'Event 1',
      location: 'Honolulu',
      mapsLink: 'https://www.google.com/maps/place/Honolulu,+HI/@21.3277125,-158.1287408,10z/data=!3m1!4b1!4m6!3m5!1s0x7c00183b8cc3464d:0x4b28f55ff3a7976c!8m2!3d21.3098845!4d-157.8581401!16s%2Fm%2F02hrh0_?entry=ttu',
      startDate: '2022-08-01',
      endDate: '2022-08-03',
      description: 'Pretty Island ',
      imageUrl: 'https://a.cdn-hotels.com/gdcs/production121/d137/d4030d17-700f-4fd1-9c05-4b1742c7a6c3.jpg?impolicy=fcrop&w=800&h=533&q=medium',
    },
    {
      id: 2,
      title: 'Event 2',
      location: 'Tokyo',
      mapsLink: 'https://www.google.com/maps/place/tokyo/data=!4m2!3m1!1s0x605d1b87f02e57e7:0x2e01618b22571b89?sa=X&ved=1t:155783&ictx=111',
      startDate: '2023-01-10',
      endDate: '2023-01-15',
      description: 'Weather is hot',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg/288px-Skyscrapers_of_Shinjuku_2009_January.jpg',
    },
  ];

  return (
    <div className="app">
      <h1>Event List</h1>
      <EventList events={events} />
    </div>
  );
};

export default App;

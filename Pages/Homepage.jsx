import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Homepage = () => {
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:5000/api/events');
      const data = await res.json();
      setEvents(data.slice(0, 6)); // limit to 6
      const uniqueCats = [...new Set(data.map(e => e.category).filter(Boolean))];
      setCategories(uniqueCats);
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">

      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Discover Local Events Near You</h1>
        <p className="text-gray-600 text-lg mb-6">From festivals to tech meetups — never miss out again.</p>
        <Link to="/events" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded shadow">Browse Events</Link>
      </section>

      {/* Upcoming Events */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {events.map(event => (
            <Link
              key={event._id}
              to={`/events/${event._id}`}
              className="border rounded-lg p-4 bg-white shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-bold">{event.name}</h3>
              <p className="text-sm text-gray-500">{event.date} @ {event.time}</p>
              <p className="text-sm">{event.location}</p>
              {event.category && (
                <p className="text-xs text-blue-600 mt-1">#{event.category}</p>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Explore by Category</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map(cat => (
            <Link
              key={cat}
              to={`/events?category=${cat}`}
              className="bg-gray-200 hover:bg-blue-200 text-gray-800 px-4 py-2 rounded-full text-sm"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

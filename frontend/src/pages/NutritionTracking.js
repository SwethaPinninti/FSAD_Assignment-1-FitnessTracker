// ActivityLogging.js
import React, { useState } from 'react';
import axios from 'axios';

const ActivityLogging = () => {
  const [activityType, setActivityType] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/activities', { activityType, duration, date });
      // Handle successful activity logging, e.g., clear form, show success message
    } catch (error) {
      // Handle activity logging error, e.g., display error message
    }
  };

  return (
    <div>
      <h1>Activity Logging</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Activity Type"
          value={activityType}
          onChange={(e) => setActivityType(e.target.value)}
        />
        <input
          type="number"
          placeholder="Duration (in minutes)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <input
          type="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Log Activity</button>
      </form>
    </div>
  );
};

export default ActivityLogging;
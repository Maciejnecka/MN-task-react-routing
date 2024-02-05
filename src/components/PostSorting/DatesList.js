import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DatesList = ({ posts }) => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('');

  // Map posts to year/month strings
  const dates = posts.map((post) => {
    const date = new Date(post.date);
    return `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(
      2,
      '0'
    )}`;
  });

  // Create a Set to remove duplicates, then convert back to array and sort
  const uniqueSortedDates = [...new Set(dates)].sort((a, b) =>
    b.localeCompare(a)
  );

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedDate !== '') {
      navigate(`/date/${selectedDate}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date-select">Sort by date:</label>
      <select id="date-select" value={selectedDate} onChange={handleDateChange}>
        <option value="">Select Date</option>
        {uniqueSortedDates.map((date) => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
      </select>
      <button type="submit">Go</button>
    </form>
  );
};

export default DatesList;

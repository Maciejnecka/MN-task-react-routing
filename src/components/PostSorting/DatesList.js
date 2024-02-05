import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DatesList = ({ posts }) => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('');

  const dates = posts.map((post) => {
    const date = new Date(post.date);
    return `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(
      2,
      '0'
    )}`;
  });

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
    <form className="date-selector" onSubmit={handleSubmit}>
      <label htmlFor="date-select" className="date-selector__label">
        Sort by date:
      </label>
      <select
        id="date-select"
        className="date-selector__select"
        value={selectedDate}
        onChange={handleDateChange}
      >
        <option value="">Select Date</option>
        {uniqueSortedDates.map((date) => (
          <option key={date} className="date-selector__option" value={date}>
            {date}
          </option>
        ))}
      </select>
      <button type="submit" className="date-selector__button">
        Go
      </button>
    </form>
  );
};

export default DatesList;

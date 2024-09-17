import React, { useState, useEffect } from 'react';
import api from '../api';// Обновите путь к вашему API

const SportClasses = () => {
  const [classes, setClasses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await api.sports(); // Вызов API
        setClasses(response.data); // Установка данных в состояние
      } catch (err) {
        setError(err); // Установка ошибки в состояние
      }
    };

    fetchClasses();
  }, []);

  return (
    <div>
      <h1>Sport Classes</h1>
      {error && <p>Error: {error.message}</p>}
      {classes.length > 0 ? (
        <ul>
          {classes.map((sportClass) => (
            <li key={sportClass.id}>
              <h2>{sportClass.class_name}</h2>
              <p><strong>Sport Type:</strong> {sportClass.sport_type}</p>
              <p><strong>Description:</strong> {sportClass.description || 'N/A'}</p>
              <p><strong>Schedule:</strong> {sportClass.schedule || 'N/A'}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No sport classes available.</p>
      )}
    </div>
  );
};

export default SportClasses;

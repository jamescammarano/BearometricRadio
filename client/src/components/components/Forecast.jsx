import React from 'react';

const Forecast = ({ weatherReport, genre }) => {
  const { feelsLike, temp, description } = weatherReport;
  return (
    <div className="w-full p-10 text-left ">
      <h2 className="text-3xl font-bold">Forecast</h2>
      <p>Feels Like: {feelsLike}°C </p>
      <p>Temp: {temp}°C</p>
      <p>Description: {description}</p>
      <p>Sounds Like: {genre.replace(/([+])/g, ' ')} </p>
    </div>
  );
};

export default Forecast;

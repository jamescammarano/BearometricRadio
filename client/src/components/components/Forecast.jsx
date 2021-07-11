import React from 'react';
import LocationInput from './LocationInput';

const Forecast = ({ weatherReport, genre }) => {
  const { feelsLike, temp, description } = weatherReport;
  return (
    <div className="w-full p-10 text-left ">
      <h2 className="text-3xl font-bold">Forecast</h2>
      <p>Feels Like: {feelsLike}°C </p>
      <p>Temp: {temp}°C</p>
      <p>Description: {description}</p>
      <p>Sounds Like: {genre} </p>
    </div>
  );
};

export default Forecast;

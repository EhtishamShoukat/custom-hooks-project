import React from 'react';
import useGeolocation from './Components/useGeolocation';

function GeolocationComponent() {
  const { position, error } = useGeolocation();

  return (
    <div className='container' style={{textAlign:"center",marginTop:'20px'}}>
      <h2>User's Geolocation</h2>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <p>Latitude: {position.latitude}</p>
          <p>Longitude: {position.longitude}</p>
          <p>Accuracy: {position.accuracy} meters</p>
        </>
      )}
    </div>
  );
}

export default GeolocationComponent;

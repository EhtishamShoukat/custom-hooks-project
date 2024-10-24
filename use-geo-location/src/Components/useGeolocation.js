import { useState, useEffect } from "react";

function useGeolocation() {
  const [position, setPosition] = useState({
    latitude: null,
    longitude: null,
    accuracy: null,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    const success = (pos) => {
      const { latitude, longitude, accuracy } = pos.coords;
      setPosition({ latitude, longitude, accuracy });
    };

    const handleError = (err) => {
      setError(err.message);
    };

    const watchId = navigator.geolocation.watchPosition(success, handleError, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    });

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return { position, error };
}

export default useGeolocation;

import { useState, useEffect } from "react";

export const useLocation = () => {
    
  const [location, setLocation] = useState({});
  const [error, setError] = useState(null);

  const onChange = ({ coords }) => {
    setLocation({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };
  const onError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    const geoLocation = navigator.geolocation;
    if (!geoLocation) {
      setError("Geolocation is not supported");
      return;
    }
    const watcher = geoLocation.watchPosition(onChange, onError);
    return () => geoLocation.clearWatch(watcher);
  }, []);

  return { ...location, error };
};

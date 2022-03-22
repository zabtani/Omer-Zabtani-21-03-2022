import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetch_user_location } from '../redux/location/location-actions';

const useUserLocation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //ASK FOR USER LOCATION AND FETCH IT IF APPROVED
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude: lat, longitude: lon } = position.coords;
      dispatch(fetch_user_location({ lat, lon }));
    });
  }, [dispatch]);
};

export default useUserLocation;

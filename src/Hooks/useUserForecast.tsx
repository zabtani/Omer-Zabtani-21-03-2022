import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetch_location_forecast } from '../redux/forecast/forecast-actions';
import { forecastUnitSelector } from '../redux/forecast/forecast-selector';
import { locationActions } from '../redux/location/location-reducer';
import { userLocationSelector } from '../redux/location/location-selector';

const useUserForecast = () => {
  const userLocation = useSelector(userLocationSelector);
  const unit = useSelector(forecastUnitSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    //IF USER GAVE LOCATION, FETCH AND SHOW HIS FORECAST (IF NOT SEEN)
    const shouldFetchUserLocation = !userLocation.seen && userLocation.location;
    if (shouldFetchUserLocation) {
      dispatch(
        fetch_location_forecast({ locationData: userLocation.location!, unit })
      );
      dispatch(locationActions.userLocationPresented());
    }
  }, [userLocation, unit, dispatch]);
};
export default useUserForecast;

import { useSelector, useDispatch } from 'react-redux';
import {
  currentForecastSelector,
  forecastLoadingSelector,
  forecastUnitSelector,
} from '../redux/forecast/forecast-selector';
import { useEffect } from 'react';
import { userLocationSelector } from '../redux/location/location-selector';
import { fetch_location_forecast } from '../redux/forecast/forecast-actions';
import { locationActions } from '../redux/location/location-reducer';
import Weather from '../components/Weather';
import FadeAnimation from '../components/Layout/Animations/FadeAnimation';

const WeatherScreen = () => {
  const chosenForecast = useSelector(currentForecastSelector);
  const isForecastloading = useSelector(forecastLoadingSelector);
  const userLocation = useSelector(userLocationSelector);
  const unit = useSelector(forecastUnitSelector);
  const dispatch = useDispatch();

  //IF USER GAVE LOCATION, FETCH AND SHOW HIS FORECAST (IF NOT SEEN)
  useEffect(() => {
    if (!userLocation.seen && userLocation.location) {
      dispatch(
        fetch_location_forecast({ locationData: userLocation.location, unit })
      );
      dispatch(locationActions.userLocationPresented());
    }
  }, [userLocation, unit, dispatch]);

  return (
    <FadeAnimation>
      <div>
        <Weather forecast={chosenForecast} loading={isForecastloading} />
      </div>
    </FadeAnimation>
  );
};

export default WeatherScreen;

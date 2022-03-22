import { useSelector } from 'react-redux';
import {
  currentForecastSelector,
  forecastLoadingSelector,
} from '../redux/forecast/forecast-selector';
import Weather from '../components/Weather';
import FadeAnimation from '../components/Layout/Animations/FadeAnimation';
import useUserForecast from '../Hooks/useUserForecast';

const WeatherScreen = () => {
  const chosenForecast = useSelector(currentForecastSelector);
  const isForecastloading = useSelector(forecastLoadingSelector);
  useUserForecast();

  return (
    <FadeAnimation>
      <div>
        <Weather forecast={chosenForecast} loading={isForecastloading} />
      </div>
    </FadeAnimation>
  );
};

export default WeatherScreen;

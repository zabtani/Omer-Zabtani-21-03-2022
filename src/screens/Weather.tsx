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
        <Weather
          forecast={{
            id: '215792',
            city: 'Ha-rakevet',
            country: 'Israel',
            global: {
              temperature: '11.3C',
              weatherText: 'Mostly cloudy',
            },
            week: {
              days: [
                {
                  date: '2022-03-21T07:00:00+02:00',
                  temperature: {
                    min: '9.9C',
                    max: '14.8C',
                  },
                },
                {
                  date: '2022-03-22T07:00:00+02:00',
                  temperature: {
                    min: '10.1C',
                    max: '15.2C',
                  },
                },
                {
                  date: '2022-03-23T07:00:00+02:00',
                  temperature: {
                    min: '12.2C',
                    max: '14.7C',
                  },
                },
                {
                  date: '2022-03-24T07:00:00+02:00',
                  temperature: {
                    min: '11C',
                    max: '14.7C',
                  },
                },
                {
                  date: '2022-03-25T07:00:00+02:00',
                  temperature: {
                    min: '13C',
                    max: '15.4C',
                  },
                },
              ],
              weatherText:
                'Expect rainy weather Wednesday evening through Thursday evening',
            },
            image:
              'https://images.unsplash.com/photo-1579003593419-98f949b9398f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTM3NDV8MHwxfHNlYXJjaHwxfHxNb3N0bHklMjBjbG91ZHklMjB3ZWF0aGVyfGVufDB8fHx8MTY0NzkwMDUwNw&ixlib=rb-1.2.1&q=80&w=1080',
          }}
          loading={isForecastloading}
        />
      </div>
    </FadeAnimation>
  );
};

export default WeatherScreen;

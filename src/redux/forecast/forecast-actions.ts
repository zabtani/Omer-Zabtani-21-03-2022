import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchForecastImage,
  fetchLocationCurrentConditions,
  fetchLocationWeeklyForecast,
} from '../../api/api-requests';
import Units from '../../enums/Units';
import { DayForecast, Forecast } from '../../interface/interface';
import { rescueMaxTemp, rescueMinTemp, rescueTempByUnit } from '../../utils';

//FULL LOCATION FORECAST
export const fetch_location_forecast = createAsyncThunk(
  'forecast/fetchLocationForecast',
  async (
    payload: {
      locationData: { id: string; city: string; country: string };
      unit: Units;
    },
    { rejectWithValue }
  ) => {
    try {
      const { unit, locationData } = payload;
      const { id, city, country } = locationData;
      const { cityWeatherText, tempature } = await fetchCurrentConditions(id);
      const temperature = rescueTempByUnit(tempature, unit);
      const { days, weekWeatherText } = await fetchWeeklyForecast(id, unit);
      const image = await fetchForecastImage(`${cityWeatherText} weather`); //GET AN IMG BASE ON WEATHER TEXT
      const forecast: Forecast = {
        id,
        city,
        country,
        global: { temperature, weatherText: cityWeatherText },
        week: { days, weatherText: weekWeatherText },
        image,
      };
      return forecast;
    } catch (err) {
      return rejectWithValue('ERR:forecast/fetchLocationForecast');
    }
  }
);

//JUST THE CURRENT WEATHER
const fetchCurrentConditions = async (id: string) => {
  const { data } = await fetchLocationCurrentConditions(id);
  const { WeatherText: cityWeatherText, Temperature } = data[0];
  return { cityWeatherText, tempature: Temperature };
};

//JUST THE WEEKLY FORECAST
const fetchWeeklyForecast = async (id: string, unit: Units) => {
  const { data } = await fetchLocationWeeklyForecast({ id, unit });
  const weekWeatherText: string = data.Headline.Text;
  const days: DayForecast[] = data.DailyForecasts.map((day: any) => {
    const forecastDay: DayForecast = {
      date: day.Date,
      temperature: {
        min: rescueMinTemp(day.Temperature),
        max: rescueMaxTemp(day.Temperature),
      },
    };
    return forecastDay;
  });
  return { days, weekWeatherText };
};

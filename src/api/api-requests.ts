import axios from 'axios';
import {
  CONDITIONS_PARAMS,
  CONDITIONS_URL,
  CORDINATED_LOCATION_URL,
  DAYS_PARAMS_UNIT_C,
  DAYS_PARAMS_UNIT_F,
  DAYS_URL,
  FETCH_CITY_URL,
} from './urls';
import { createApi } from 'unsplash-js';
import { UNSPLASH_API_KEY } from '../config';

//GET req by axios.
const GET = async <T>(url: string) => {
  return await axios.get<T>(`${url}`);
};

//utility for query assignment
const getQ = (query: string) => {
  return query.trim().replace(/\s/g, '+');
};

//api creation for image service.
const unsplash = createApi({
  accessKey: UNSPLASH_API_KEY,
});

//for the user self location.
export const fetchCordinatedLocation = async (payload: {
  lat: number;
  lon: number;
}): Promise<any> => {
  const URL = CORDINATED_LOCATION_URL + `&q=${payload.lat},${payload.lon}`;
  const data = await GET(URL);
  return data;
};

//for location search
export const fetchQueryResult = async (query: string): Promise<any> => {
  console.log(query);
  const QUERY = getQ(query);
  const URL = FETCH_CITY_URL + QUERY;
  const data = await GET(URL);
  return data;
};

//for location basic forecast (current temp and string status)
export const fetchLocationCurrentConditions = async (
  id: string
): Promise<any> => {
  const URL = CONDITIONS_URL + id + CONDITIONS_PARAMS;
  const data = await GET(URL);

  return data;
};

//for location days of the week forecat.
export const fetchLocationWeeklyForecast = async (payload: {
  id: string;
  unit: string;
}): Promise<any> => {
  const DAYS_PARAMS =
    payload.unit === 'c' ? DAYS_PARAMS_UNIT_C : DAYS_PARAMS_UNIT_F;
  const URL = DAYS_URL + payload.id + DAYS_PARAMS;
  const data = await GET(URL);
  return data;
};

//for the forecast image.
export const fetchForecastImage = async (query: string) => {
  let forecastImage;
  try {
    const imgData = await unsplash.search.getPhotos({
      query,
    });
    forecastImage = imgData.response?.results[0].urls.regular;
  } catch {
    forecastImage = undefined;
  }
  return forecastImage;
};

import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchCordinatedLocation,
  fetchQueryResult,
} from '../../api/api-requests';
import { Location } from '../../interface/interface';

//USER LOCATION BASE ON GEOLOCATION
export const fetch_user_location = createAsyncThunk(
  'forecast/fetchUserLocation',
  async (payload: { lat: number; lon: number }, { rejectWithValue }) => {
    try {
      const { data: locationData } = await fetchCordinatedLocation(payload);
      const userLocation: Location = {
        id: locationData.Key,
        city: locationData.LocalizedName,
        country: locationData.Country.LocalizedName,
      };
      return userLocation;
    } catch (err) {
      return rejectWithValue('ERR:forecast/fetchUserLocation');
    }
  }
);

//LOCATIONS ARR BASE ON QUERY
export const fetch_location_results = createAsyncThunk(
  'forecast/fetchLocationResults',
  async (query: string, { rejectWithValue }) => {
    try {
      const { data: queryData } = await fetchQueryResult(query);
      const resultLocations: Location[] = queryData.map((location: any) => {
        return {
          id: location.Key,
          city: location.LocalizedName,
          country: location.Country.LocalizedName,
        };
      });
      return resultLocations;
    } catch (err) {
      return rejectWithValue('ERR:forecast/fetchLocationResults');
    }
  }
);

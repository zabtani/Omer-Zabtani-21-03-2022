import { createSlice, SerializedError } from '@reduxjs/toolkit';
import { Forecast, Location } from '../../interface/interface';
import { LocationState } from '../../interface/redux';
import {
  fetch_location_results,
  fetch_user_location,
} from './location-actions';

const initialState: LocationState = {
  loading: false,
  error: '',
  favorites: [],
  userLocationInfo: { location: null, seen: false },
  searchResultLocations: [],
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    userLocationPresented: (state) => {
      return {
        ...state,
        userLocationInfo: { ...state.userLocationInfo, seen: true },
      };
    },
    chooseAsFavorite: (state, action: { payload: Forecast }) => {
      const chosenFavorite = action.payload;
      return {
        ...state,
        favorites: [...state.favorites, chosenFavorite],
      };
    },
    resetSearchResults: (state) => {
      return {
        ...state,
        searchResultLocations: [],
      };
    },
    clearError: (state) => {
      return {
        ...state,
        error: '',
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetch_user_location.fulfilled,
      (state, action: { payload: Location }) => {
        state.userLocationInfo.location = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(fetch_user_location.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetch_user_location.rejected,
      (state, action: { error: SerializedError }) => {
        state.error = action.error.message!;
        state.loading = false;
      }
    );

    builder.addCase(
      fetch_location_results.fulfilled,
      (state, action: { payload: Location[] }) => {
        const resultLocations = action.payload;
        state.searchResultLocations = [...resultLocations];
        state.loading = false;
      }
    );
    builder.addCase(fetch_location_results.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetch_location_results.rejected,
      (state, action: { error: SerializedError }) => {
        state.error = action.error.message!;
        state.loading = false;
      }
    );
  },
});
export const locationActions = locationSlice.actions;
export default locationSlice.reducer;

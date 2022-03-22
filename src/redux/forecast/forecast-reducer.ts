import { createSlice, SerializedError } from '@reduxjs/toolkit';
import Units from '../../enums/Units';
import { Forecast } from '../../interface/interface';
import { ForecastState } from '../../interface/redux';
import { fetch_location_forecast } from './forecast-actions';

const initialState: ForecastState = {
  loading: false,
  error: '',
  favorites: [],
  unit: Units.C,
  currentForecast: null,
};

export const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
    setUnit: (state, action: { payload: Units }) => {
      const unit = action.payload;
      return {
        ...state,
        unit,
      };
    },

    toggleFavorite: (
      state,
      action: { payload: { location: Forecast; isFavoriteLocation: boolean } }
    ) => {
      const { location, isFavoriteLocation } = action.payload;
      let updatedFavorites = [];
      if (isFavoriteLocation) {
        updatedFavorites = state.favorites.filter(
          (favorite: Forecast) => favorite.id !== location.id
        );
      } else {
        updatedFavorites = [...state.favorites, location];
      }
      return {
        ...state,
        favorites: updatedFavorites,
      };
    },

    chooseAsCurrent: (state, action: { payload: Forecast }) => {
      const currentForecast = action.payload;
      return {
        ...state,
        currentForecast,
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
    //fetch_location_forecast
    builder.addCase(
      fetch_location_forecast.fulfilled,
      (state, action: { payload: Forecast }) => {
        const forecast: Forecast = action.payload;
        state.currentForecast = { ...forecast };
        state.loading = false;
      }
    );

    builder.addCase(fetch_location_forecast.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      fetch_location_forecast.rejected,
      (state, action: { error: SerializedError }) => {
        state.error = action.error.message!;
        state.loading = false;
      }
    );
  },
});
export const forecastActions = forecastSlice.actions;
export default forecastSlice.reducer;

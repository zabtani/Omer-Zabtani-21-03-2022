import { configureStore } from '@reduxjs/toolkit';
import forecastReducer from './forecast/forecast-reducer';
import locationReducer from './location/location-reducer';
export default configureStore({
  reducer: {
    forecast: forecastReducer,
    location: locationReducer,
  },
});

import { createSelector } from 'reselect';
import { IStoreRootState } from '../../interface/redux';
export const forecastStateSelector = (state: IStoreRootState) => state.forecast;

export const forecastLoadingSelector = createSelector(
  forecastStateSelector,
  (state) => state.loading
);

export const forecastErrorSelector = createSelector(
  forecastStateSelector,
  (state) => state.error
);

export const currentForecastSelector = createSelector(
  forecastStateSelector,
  (state) => state.currentForecast || null
);

export const forecastUnitSelector = createSelector(
  forecastStateSelector,
  (state) => state.unit
);

export const favoritesSelector = createSelector(
  forecastStateSelector,
  (state) => state.favorites
);

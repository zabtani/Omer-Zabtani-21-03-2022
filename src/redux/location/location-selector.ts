import { createSelector } from 'reselect';
import { IStoreRootState } from '../../interface/redux';
export const locationStateSelector = (state: IStoreRootState) => state.location;

export const locationLoadingSelector = createSelector(
  locationStateSelector,
  (state) => state.loading
);
export const locationErrorSelector = createSelector(
  locationStateSelector,
  (state) => state.error
);
export const locationSearchResultsSelector = createSelector(
  locationStateSelector,
  (state) => state.searchResultLocations
);
export const favoriteLocationsSelector = createSelector(
  locationStateSelector,
  (state) => state.favorites
);
export const userLocationSelector = createSelector(
  locationStateSelector,
  (state) => state.userLocationInfo
);

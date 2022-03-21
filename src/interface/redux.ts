import Units from '../enums/Units';
import { Forecast, Location } from './interface';

export interface IStoreRootState {
  forecast: ForecastState;
  location: LocationState;
}
export type ForecastState = {
  loading: boolean;
  error: string;
  unit: Units;
  currentForecast: Forecast | null;
};

export type LocationState = {
  loading: boolean;
  error: string;
  favorites: Forecast[];
  userLocationInfo: { location: Location | null; seen: boolean };
  searchResultLocations: Location[];
};

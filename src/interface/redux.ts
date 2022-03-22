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
  favorites: Forecast[];
  currentForecast: Forecast | null;
};

export type LocationState = {
  loading: boolean;
  error: string;
  userLocationInfo: { location: Location | null; seen: boolean };
  searchResultLocations: Location[];
};

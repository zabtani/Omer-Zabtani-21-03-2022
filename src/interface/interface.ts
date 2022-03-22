import Paths from '../enums/Paths';

//PAGES
export interface Page {
  path: Paths;
  title: string;
}

//LOCATION
export interface Location {
  id: string;
  city: string;
  country: string;
}

//FORECAST
export interface ForecastBase {
  weatherText: string;
  temperature: string;
}
export interface Forecast extends Location {
  global: ForecastBase;
  week: {
    weatherText: string;
    days: DayForecast[];
  };
  image?: string;
}
export interface DayForecast {
  date: string;
  temperature: { min: string; max: string };
}

//API PAYLOAD
export interface PayloadTempBase {
  Value: string;
  Unit: string;
  UnitType: number;
}
export interface PayloadLocationTemp {
  Metric: PayloadTempBase;
  Imperial: PayloadTempBase;
}
export interface PayloadDayTemp {
  Maximum: PayloadTempBase;
  Minimum: PayloadTempBase;
}

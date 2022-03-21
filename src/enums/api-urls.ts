export enum URLS {
  BASE_URL = 'https://dataservice.accuweather.com/',
  QUERY = '&q=',
  BASE_PARAMS = '&language=en-us',
  AUTOCOMPLETE = 'locations/v1/cities/autocomplete?',
  CORDINATED = 'locations/v1/cities/geoposition/search?',
  CURRENT_CONDITIONS = 'currentconditions/v1/',
  DAYS_FORECAST = 'forecasts/v1/daily/5day/',
  DAYS_PARAMS_C = '&metric=true',
  DAYS_PARAMS_F = '&metric=false',
}

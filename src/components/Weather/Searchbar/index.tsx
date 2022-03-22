import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import { Location } from '../../../interface/interface';
import { useSelector, useDispatch } from 'react-redux';
import {
  locationLoadingSelector,
  locationSearchResultsSelector,
} from '../../../redux/location/location-selector';
import { fetch_location_results } from '../../../redux/location/location-actions';

import { fetch_location_forecast } from '../../../redux/forecast/forecast-actions';
import { useStyles } from './useStyles';
import { forecastUnitSelector } from '../../../redux/forecast/forecast-selector';
import LocationResult from './LocationResult';

const SearchBar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const loading = useSelector(locationLoadingSelector);
  const locations = useSelector(locationSearchResultsSelector);
  const unit = useSelector(forecastUnitSelector);
  const dispatch = useDispatch();

  //FETCH LOCATION SUGGESTIONS ON SEARCH
  const searchHandler = (e: any, value: any) => {
    console.log('d');
    const searchValue = value.trim();
    setInputValue(value ?? '');

    const isValidForSearch = searchValue.length > 2;
    if (inputValue.includes(searchValue) || !isValidForSearch) return;

    dispatch(fetch_location_results(searchValue));
  };

  //FETCH FULL FORECAST FOR THE OPTION CLICKED
  const handleLocationChoice = async (location: Location | null) => {
    if (location === null) return;
    dispatch(fetch_location_forecast({ locationData: location, unit }));
  };

  return (
    <Autocomplete
      className={classes.container}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionLabel={(location) => `${location.city}, ${location.country}`}
      options={locations}
      loading={loading}
      inputValue={inputValue}
      onInputChange={(e, value) => searchHandler(e, value)}
      onChange={(e, location: Location | null) =>
        handleLocationChoice(location)
      }
      renderOption={(props, location) => {
        return (
          <span {...props} key={location.id}>
            <LocationResult location={location} />
          </span>
        );
      }}
      renderInput={(params) => (
        <TextField
          variant="filled"
          {...params}
          label="Search City"
          className={classes.searchBar}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress className={classes.loader} size={28} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};
export default SearchBar;

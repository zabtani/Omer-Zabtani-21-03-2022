import { Alert, Snackbar } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Msg from '../../enums/Info';
import { forecastActions } from '../../redux/forecast/forecast-reducer';
import { forecastErrorSelector } from '../../redux/forecast/forecast-selector';
import { locationActions } from '../../redux/location/location-reducer';
import {
  locationErrorSelector,
  userLocationSelector,
} from '../../redux/location/location-selector';

const AlertSnackBar = () => {
  const userLocation = useSelector(userLocationSelector);
  const locationError = useSelector(locationErrorSelector);
  const forecastError = useSelector(forecastErrorSelector);
  const [alertReason, setAlertReason] = useState('');
  const dispatch = useDispatch();

  const handleError = useCallback(
    (msg: string) => {
      setAlertReason(msg);
      dispatch(locationActions.clearError());
    },
    [dispatch]
  );

  useEffect(() => {
    if (locationError) handleError(Msg.LOCATION_ERR_MSG);
    dispatch(locationActions.clearError());
  }, [locationError, handleError, dispatch]);

  useEffect(() => {
    if (forecastError) handleError(Msg.FORECAST_ERR_MSG);
    dispatch(forecastActions.clearError());
  }, [forecastError, handleError, dispatch]);

  useEffect(() => {
    if (!userLocation.seen && userLocation.location) {
      setAlertReason(Msg.WELCOME_MSG);
    }
  }, [userLocation]);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') return;
    setAlertReason('');
  };
  const severity = alertReason.includes('error') ? 'error' : 'success';
  return (
    <Snackbar
      open={!!alertReason}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {alertReason}
      </Alert>
    </Snackbar>
  );
};
export default AlertSnackBar;

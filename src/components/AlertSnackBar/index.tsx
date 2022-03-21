import { Alert, Snackbar } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Msg from '../../enums/Info';
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

  //HANDLE THE ERROR SELECTORS
  useEffect(() => {
    const handleError = (msg: string) => {
      setAlertReason(msg);
      dispatch(locationActions.clearError());
    };
    if (locationError) handleError(Msg.LOCATION_ERR_MSG);
    if (forecastError) handleError(Msg.SERVER_ERR_MSG);
  }, [locationError, forecastError, dispatch]);

  //HANDLE WELCOME MSG
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

import { Button, CardActions } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useStyles } from './useStyles';
import { useDispatch, useSelector } from 'react-redux';
import { locationActions } from '../../../../redux/location/location-reducer';
import { Forecast } from '../../../../interface/interface';
import {
  favoriteLocationsSelector,
  userLocationSelector,
} from '../../../../redux/location/location-selector';
import { useEffect, useState } from 'react';
interface Props {
  locationForecast: Forecast;
}
const FavoriteButton = ({ locationForecast }: Props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const favorites = useSelector(favoriteLocationsSelector);
  const { location: userLocation } = useSelector(userLocationSelector);
  const dispatch = useDispatch();
  const classes = useStyles();

  //PUSH LOCATION TO FAV ARR IF BUTTON CLICKED
  useEffect(() => {
    const isLocationFavorite = (id: string) =>
      favorites.some((favorite: Forecast) => favorite.id === id);

    if (userLocation && userLocation.city === locationForecast.city) {
      //API RETURNS  DIFFERENT ID WITH CORDINATED API REQ - SO I CHECK IF USER LOCATION FAV BASE ON THE CITY NAME!
      setIsFavorite(true);
      return;
    }
    const result = isLocationFavorite(locationForecast.id);
    setIsFavorite(result);
  }, [locationForecast, favorites, userLocation]);

  const handleChoice = () => {
    setIsFavorite(true);
    dispatch(locationActions.chooseAsFavorite(locationForecast));
  };

  return (
    <CardActions>
      <Button
        disabled={isFavorite}
        onClick={handleChoice}
        sx={{ position: 'absolute' }}
        className={classes.favButton}
        variant="outlined"
        startIcon={<FavoriteIcon color="warning" />}
      >
        {isFavorite ? 'Saved' : 'Mark as Favorite'}
      </Button>
    </CardActions>
  );
};

export default FavoriteButton;

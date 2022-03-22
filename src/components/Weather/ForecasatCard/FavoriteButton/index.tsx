import { Button, CardActions } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import { useStyles } from './useStyles';
import { useDispatch } from 'react-redux';
import { Forecast } from '../../../../interface/interface';
import { forecastActions } from '../../../../redux/forecast/forecast-reducer';
import useFavoriteCheck from '../../../../Hooks/useFavoriteLocation';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
interface Props {
  locationForecast: Forecast;
}
const FavoriteButton = ({ locationForecast }: Props) => {
  const dispatch = useDispatch();
  const { id, city, country } = locationForecast;
  const { isFavoriteLocation } = useFavoriteCheck({
    location: { id, city, country },
  });
  const classes = useStyles({ isFavoriteLocation });

  const handleChoice = () => {
    dispatch(
      forecastActions.toggleFavorite({
        location: locationForecast,
        isFavoriteLocation,
      })
    );
  };

  const deleteIcon = <DeleteIcon color="disabled" />;
  const addIcon = <AddCircleOutlineIcon color="warning" />;
  const favIcon = <FavoriteIcon color="warning" />;

  return (
    <CardActions>
      <Button
        onClick={handleChoice}
        sx={{ position: 'absolute' }}
        className={classes.favButton}
        variant="outlined"
        endIcon={isFavoriteLocation ? deleteIcon : undefined}
        startIcon={isFavoriteLocation ? favIcon : addIcon}
      >
        <div className={classes.text}>
          <span>Add to favorites</span>
        </div>
      </Button>
    </CardActions>
  );
};

export default FavoriteButton;

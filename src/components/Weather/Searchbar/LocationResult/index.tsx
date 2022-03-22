import { useStyles } from './useStyles';
import { Location } from '../../../../interface/interface';
import useFavoriteCheck from '../../../../Hooks/useFavoriteLocation';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface Props {
  location: Location;
}

const LocationResult = ({ location }: Props) => {
  const classes = useStyles();
  const { city, country } = location;
  const { isFavoriteLocation } = useFavoriteCheck({ location });

  return (
    <span className={classes.result}>
      {`${city}, ${country}`}
      {isFavoriteLocation && <FavoriteIcon color="warning" />}
    </span>
  );
};
export default LocationResult;

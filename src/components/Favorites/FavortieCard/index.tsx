import { CardActionArea, Card } from '@mui/material';
import { Forecast } from '../../../interface/interface';
import { useStyles } from './useStyles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from 'react-redux';
import { forecastActions } from '../../../redux/forecast/forecast-reducer';
import { useNavigate } from 'react-router-dom';
import Paths from '../../../enums/Paths';

interface Props {
  favoriteData: Forecast;
}

const FavoriteCard = ({ favoriteData }: Props) => {
  const { city, country, global } = favoriteData;
  const { temperature, weatherText } = global;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const handleChoice = () => {
    dispatch(forecastActions.chooseAsCurrent(favoriteData));
    navigate(Paths.WEATHER);
  };

  return (
    <Card
      variant="outlined"
      className={classes.favorite}
      onClick={handleChoice}
    >
      <CardActionArea className={classes.container}>
        <FavoriteIcon />
        <div className={classes.info}>
          <div className={classes.locationName}>
            {city}, {country}
          </div>
          <div className={classes.temperature}>{temperature}</div>
        </div>
        <div className={classes.weatherText}>{weatherText}</div>
      </CardActionArea>
    </Card>
  );
};

export default FavoriteCard;

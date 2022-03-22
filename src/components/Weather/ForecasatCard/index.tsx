import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { DayForecast, Forecast } from '../../../interface/interface';
import { useStyles } from './useStyles';
import FavoriteButton from './FavoriteButton';
import GrowAnimation from '../../Layout/Animations/GrowAnimation';
import ForecastDay from './ForecastDay';

interface Props {
  forecast: Forecast;
}

const ForecastCard = ({ forecast }: Props) => {
  const { image, city, country, global, week } = forecast;
  const classes = useStyles();

  return (
    <GrowAnimation>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          className={classes.image}
          image={image ? image : defaultImageUrl}
          alt={city}
        />
        <FavoriteButton locationForecast={forecast} />
        <Typography
          gutterBottom
          variant="h4"
          className={classes.locationInfo}
          component="div"
        >
          {city}, {country}
        </Typography>
        <Typography className={classes.tempature} variant="h6" component="div">
          {global.temperature}
        </Typography>
        <Typography
          className={classes.locationInfoText}
          gutterBottom
          variant="h6"
          component="div"
        >
          {global.weatherText}
        </Typography>
        <div>
          <div className={classes.weeklyDaysForecast}>
            {week.days.map((day: DayForecast) => (
              <ForecastDay key={day.date} day={day} />
            ))}
          </div>
          <Typography
            gutterBottom
            className={classes.weeklyInfo}
            variant="body1"
            component="div"
          >
            {week.weatherText}
          </Typography>
        </div>
      </Card>
    </GrowAnimation>
  );
};
export default ForecastCard;

const defaultImageUrl =
  'https://images.unsplash.com/photo-1601383124961-32dfdfc8f88a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';

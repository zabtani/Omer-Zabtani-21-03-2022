import SearchBar from './Searchbar';
import { Forecast } from '../../interface/interface';
import { CircularProgress } from '@mui/material';
import { useStyles } from './useStyles';
import UnitSwitch from './UnitSwitch';
import InfoCard from '../InfoCard';
import ForecastCard from './ForecasatCard';
interface Props {
  forecast: Forecast | null;
  loading: boolean;
}
const Weather = ({ forecast, loading }: Props) => {
  const classes = useStyles();

  let content = <InfoCard text="Choose a City To Get Your Forecast ☂️" />;

  if (forecast) {
    content = <ForecastCard forecast={forecast} />;
  }

  if (loading) {
    content = <CircularProgress className={classes.loader} size={150} />;
  }

  return (
    <div>
      <div className={classes.topContainer}>
        <UnitSwitch />
        <SearchBar />
      </div>
      <div>{content}</div>
    </div>
  );
};

export default Weather;

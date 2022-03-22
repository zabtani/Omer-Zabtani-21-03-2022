import { Paper } from '@mui/material';
import useWindowDimensions from '../../../../Hooks/useWindowDimensions';
import { DayForecast } from '../../../../interface/interface';
import { parseToDayString, parseToDDMM } from '../../../../utils';
import { useStyles } from './useStyles';

interface Props {
  day: DayForecast;
}

const ForecastDay = ({ day }: Props) => {
  const { width } = useWindowDimensions();
  const classes = useStyles();
  const isShortDaysString = width < 600;
  const date = new Date(day.date);

  return (
    <Paper elevation={2} className={classes.dayContainer}>
      <div className={classes.dayInfo}>
        <div>{parseToDayString(date, isShortDaysString)}</div>
        <div>{parseToDDMM(date)}</div>
      </div>
      <div
        className={classes.dateInfo}
      >{`${day.temperature.min} - ${day.temperature.max}`}</div>
    </Paper>
  );
};
export default ForecastDay;

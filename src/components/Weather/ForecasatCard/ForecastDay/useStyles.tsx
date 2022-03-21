import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles<Theme>(({ breakpoints, palette }) => ({
  dayContainer: {
    color: '#46484A',
    backgroundColor: `${palette.primary.dark} !important`,
    margin: '0 1.5% 0 1.5%',
    width: '20%',
    minHeight: '5rem',
    flexGrow: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    [breakpoints.down('lg')]: {
      margin: '0 0.2% 0 0.2%',
    },
    [breakpoints.down('md')]: {
      minHeight: 'auto',
      width: '90%',
      margin: '1% 2% 1% 2%',
      padding: '2%',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
  },
  dayInfo: {
    [breakpoints.down('md')]: {
      display: 'flex',
      width: '50%',
      justifyContent: 'space-between',
    },
  },
  dateInfo: {
    fontWeight: 600,
  },
  locationInfo: {
    fontWeight: 600,
  },
}));

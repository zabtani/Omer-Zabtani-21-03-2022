import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles<Theme>(({ breakpoints, palette }) => ({
  card: {
    userSelect: 'none',
    position: 'relative',
    color: '#46484A',
    backgroundColor: `${palette.primary.light} !important`,
    width: '65%',
    margin: 'auto auto 5% auto ',

    [breakpoints.up('xl')]: {
      width: '55%',
    },
    [breakpoints.down('md')]: {
      width: '90%',
    },
  },
  weeklyInfo: {
    marginTop: '1% !important',
    fontWeight: '600 !important',
    [breakpoints.down('md')]: {
      fontSize: '80% !important',
    },
  },
  image: {
    fontWeight: 600,
    height: '27vh',
    [breakpoints.down('md')]: {
      height: '20vh',
    },
  },
  weeklyDaysForecast: {
    justifyContent: 'space-between',
    display: 'flex',
    paddingBottom: '1%',

    height: '50%',
    [breakpoints.down('md')]: {
      alignItems: 'center',
      flexDirection: 'column',
    },
  },

  tempature: {
    borderRadius: '7px',
    width: 'fit-content',
    padding: '0 2% 0 2%',
    margin: '1% auto !important',
    backgroundColor: `${palette.primary.main} !important`,
    [breakpoints.down('md')]: {
      fontSize: '100% !important',
    },
  },

  locationInfo: {
    fontWeight: 600,
    [breakpoints.down('md')]: {
      fontSize: '150% !important',
    },
  },
  locationInfoText: {
    [breakpoints.down('md')]: {
      fontSize: '100% !important',
    },
  },
}));

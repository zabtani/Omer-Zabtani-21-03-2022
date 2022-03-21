import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles<Theme>(({ breakpoints, palette }) => ({
  favorite: {
    margin: '5%',

    width: '12rem',
    backgroundColor: `${palette.primary.light} !important`,
    minHeight: '14rem',
  },
  container: {
    '& svg': {
      height: '2.2rem',
      width: '2.2rem',
      color: 'tomato !important',
    },
    padding: '5% 10% 5% 10% !important',
    alignItems: 'center',
    display: 'flex !important',
    flexDirection: 'column',
    height: '100% !important',
  },
  locationName: { fontSize: 18, marginTop: '10%', fontWeight: 600 },
  weatherText: {
    fontSize: 15,
    lineBreak: 'anywhere',
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 5,
    width: '100%',
    justifyContent: 'center',
  },

  temperature: {
    margin: '10% auto 10% auto',
    padding: '5%',
    borderRadius: '7px',
    width: 'fit-content',
    backgroundColor: `${palette.primary.main} !important`,
  },
  info: { width: '100%', flexGrow: 1 },
}));

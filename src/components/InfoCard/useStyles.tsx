import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles<Theme>(({ breakpoints, palette }) => ({
  card: {
    fontSize: 36,
    padding: '1%',
    borderRadius: '10px',
    fontWeight: 600,
    width: 'fit-content',
    margin: '5% auto',
    backgroundColor: `${palette.primary.dark} !important`,
    [breakpoints.up('xl')]: {},
    [breakpoints.down('md')]: {
      fontSize: 18,
    },
  },
}));

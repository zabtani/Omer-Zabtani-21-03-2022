import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles<Theme>(({ breakpoints, palette }) => ({
  topContainer: {
    position: 'relative',
    width: 'auto',
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'center',
    alignContent: 'center',
    padding: '2%',
  },
  loader: {
    marginTop: '10vh',
    color: `${palette.secondary.dark} !important`,
  },
}));

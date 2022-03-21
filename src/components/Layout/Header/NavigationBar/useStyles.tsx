import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles<Theme>(({ breakpoints, palette }) => ({
  appBar: {
    backgroundColor: `${palette.secondary.main} !important`,
  },
  link: {
    textDecoration: 'none !important',
  },
  appLogo: {
    display: 'flex',
  },
  logoIcon: {
    alignSelf: 'center',
    marginRight: '12%',
  },
  appName: {
    width: '100%',
  },
}));

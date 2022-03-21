import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles<Theme>(({ breakpoints, palette }) => ({
  context: {
    zIndex: 2,
    width: '100%',
    height: '100vh',
    position: 'absolute',
    overflow: 'overlay',
  },
}));

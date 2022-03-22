import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles<Theme>(({ breakpoints, palette }) => ({
  result: {
    width: '100%',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
}));

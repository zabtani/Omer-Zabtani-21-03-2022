import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles<Theme>(({ breakpoints, palette }) => ({
  bg: {
    backgroundColor: `${palette.secondary.light} !important`,
  },
}));

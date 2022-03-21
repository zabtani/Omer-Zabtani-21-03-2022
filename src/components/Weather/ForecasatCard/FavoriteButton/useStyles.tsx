import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles<Theme>(({ breakpoints, palette }) => ({
  favButton: {
    fontSize: 13,
    top: 10,
    color: 'tomato !important',
    border: '1px solid transparent !important',
    backgroundColor: 'white !important',

    '&:hover': {
      '& span': {
        '& svg': {
          color: 'white !important',
        },
      },
      color: 'white !important',
      backgroundColor: '#ff634778 !important',
      border: '1px solid transparent !important',
    },
    [breakpoints.down('md')]: {
      fontSize: '60% !important',
    },
  },
}));

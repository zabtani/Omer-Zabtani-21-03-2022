import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles<Theme>(({ breakpoints, palette }) => ({
  container: {
    width: '35%',
    [breakpoints.down('md')]: {
      width: '55%',
    },
    [breakpoints.down('sm')]: {
      margin: '5% 0 5% 0',
      width: '93%',
    },
  },
  loader: {
    color: `${palette.secondary.dark} !important`,
  },
  searchBar: {
    '& label.Mui-focused': {
      color: `${palette.secondary.dark} !important`,
    },
    '& .MuiFilledInput-underline': {
      backgroundColor: 'rgb(214, 221, 214) !important',
    },
    '& .MuiFilledInput-underline.Mui-focused': {
      backgroundColor: `${palette.primary.main} !important`,
    },
    '& .MuiFilledInput-underline:after': {
      borderColor: `${palette.secondary.dark} !important`,
    },
  },
}));

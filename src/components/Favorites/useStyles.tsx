import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles<Theme>(({ breakpoints, palette }) => ({
  favoritesContainer: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    display: 'flex',
    padding: '2%',
    width: '90%',
    margin: 'auto',
  },
}));

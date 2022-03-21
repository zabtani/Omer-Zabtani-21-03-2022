import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles<Theme>(({ breakpoints, palette }) => ({
  container: {
    position: 'absolute',
    padding: '0 2% 0 2%',
    top: 10,
    left: 0,
    borderRadius: '10px',
    backgroundColor: palette.primary.main,
    alignSelf: 'flex-start',
    display: 'flex',
    marginLeft: '2%',
    alignItems: 'center',
    justifyContent: 'center',
    [breakpoints.down('md')]: {
      alignSelf: 'flex-end',
      position: 'relative',
      margin: '0 4% 0 0',
      top: 0,
    },
  },
}));

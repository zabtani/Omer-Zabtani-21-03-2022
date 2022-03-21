import { APP_NAME } from '../../../../utils';
import { useStyles } from './useStyles';
import CloudIcon from '@mui/icons-material/Cloud';

const NavLogo = () => {
  const classes = useStyles();
  return (
    <div className={classes.appLogo}>
      <CloudIcon className={classes.logoIcon} />
      <div className={classes.appName}>{APP_NAME}</div>
    </div>
  );
};
export default NavLogo;

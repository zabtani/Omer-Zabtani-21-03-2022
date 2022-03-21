import classes from './styles.module.css';
import { useStyles } from './useStyles';

const BGanimatiom = () => {
  const bg = useStyles();
  
  return (
    <div className={`${classes.area} ${bg.bg}`}>
      <ul className={classes.circles}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default BGanimatiom;

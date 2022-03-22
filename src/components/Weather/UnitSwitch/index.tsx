import Switch from '@mui/material/Switch';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Units from '../../../enums/Units';
import { forecastActions } from '../../../redux/forecast/forecast-reducer';
import { forecastUnitSelector } from '../../../redux/forecast/forecast-selector';
import { useStyles } from './useStyles';
import fahrenheit from '../../../assets/fahrenheit.svg';
import celcius from '../../../assets/celcius.svg';

const UnitSwitch = () => {
  const unit = useSelector(forecastUnitSelector);
  const [checked, setChecked] = useState(unit === Units.C);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isC = event.target.checked;
    dispatch(forecastActions.setUnit(isC ? Units.C : Units.F));
    setChecked(event.target.checked);
  };

  return (
    <div className={classes.container}>
      <div>
        <img alt="fahrenheit" src={fahrenheit} />
      </div>
      <Switch
        color="default"
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'Unit Switch' }}
      />
      <div>
        <img alt="celcius" src={celcius} />
      </div>
    </div>
  );
};

export default UnitSwitch;

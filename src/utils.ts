import { PaletteMode } from '@mui/material';
import Paths from './enums/Paths';
import { PayloadLocationTemp, PayloadDayTemp } from './interface/interface';

// DATE / DAYS HANDLING
export const parseToDayString = (date: Date, shortString: boolean) =>
  date.toLocaleString('en-us', { weekday: shortString ? 'short' : 'long' });

export const parseToDDMM = (date: Date) => {
  let mm = date.getMonth() + 1;
  let dd = date.getDate();
  const day = dd < 10 ? '0' + dd : dd;
  const mon = mm < 10 ? '0' + mm : mm;
  return day + '/' + mon;
};

//TEMP HANDLING
export const rescueTempByUnit = (temp: PayloadLocationTemp, unit: string) => {
  return unit === 'c'
    ? temp.Metric.Value + temp.Metric.Unit
    : temp.Imperial.Value + temp.Imperial.Unit;
};
export const rescueMaxTemp = (temp: PayloadDayTemp) => {
  return temp.Maximum.Value + temp.Maximum.Unit;
};
export const rescueMinTemp = (temp: PayloadDayTemp) => {
  return temp.Minimum.Value + temp.Minimum.Unit;
};
export const APP_NAME = 'WEATHER APP';
export const pages = [
  { path: Paths.FAVORITES, title: 'FAVORITES' },
  { path: Paths.WEATHER, title: 'WEATHER' },
];

//MUI DESIGN TOKENS (PALETTE/MODE)
export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: 'rgb(214, 221, 214)',
            dark: 'rgb(221, 228, 221,0.45)',
            light: 'rgb(249, 249, 249,0.65)',
          },
          secondary: {
            light: '#FFFFFF',
            main: 'rgb(39, 102, 120,0.6)',
            dark: 'rgb(39, 102, 120)',
          },
        }
      : {
          primary: {
            main: 'rgba(255, 255, 255, 0.45)',
            dark: 'rgba(255, 255, 255, 0.55)',
            light: 'rgba(255, 255, 255, 0.3)',
          },
          secondary: {
            light: 'rgba(0, 0, 0, 0.78)',
            main: 'rgba(0, 0, 0, 0.3)',
            dark: 'rgb(39, 102, 120)',
          },
        }),
  },
});
//

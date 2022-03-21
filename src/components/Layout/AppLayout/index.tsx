import { Outlet } from 'react-router-dom';
import NavigationBar from '../Header/NavigationBar';
import { getDesignTokens } from '../../../utils';
import { createTheme, PaletteMode } from '@mui/material';
import { useMemo, useState } from 'react';
import { ThemeProvider } from '@mui/styles';
import BGanimatiom from '../Animations/BGanimatiom';
import { useStyles } from './useStyles';
import AlertSnackBar from '../../AlertSnackBar';

const Layout = () => {
  const [mode, setMode] = useState<PaletteMode>('light');
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const classes = useStyles();

  const HandleModeToggle = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.context}>
        <header>
          <NavigationBar
            isLightMode={mode === 'light'}
            toggleMode={HandleModeToggle}
          />
        </header>
        <Outlet />
        <AlertSnackBar />
      </div>
      <BGanimatiom />
    </ThemeProvider>
  );
};

export default Layout;

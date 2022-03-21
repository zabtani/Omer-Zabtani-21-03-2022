import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import DesktopNavigation from './DesktopNaviation';
import MobileNavigation from './MobileNavigation';
import { useStyles } from './useStyles';
import { pages } from '../../../../utils';

interface Props {
  toggleMode: () => void;
  isLightMode: boolean;
}

const NavigationBar = ({ toggleMode, isLightMode }: Props) => {
  const classes = useStyles();
  const navProps = {
    pages,
    toggleMode,
    isLightMode,
  };
  return (
    <AppBar elevation={7} className={classes.appBar} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DesktopNavigation {...navProps} />
          <MobileNavigation {...navProps} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavigationBar;

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MobileLinkButton from './MobileLinkButton';
import NavLogo from './NavLogo';
import ModeSwitch from './ModeSwitch';
import { Page } from '../../../../interface/interface';
import { useState } from 'react';

interface Props {
  pages: Page[];
  toggleMode: () => void;
  isLightMode: boolean;
}

const MobileNavigation = ({ pages, toggleMode, isLightMode }: Props) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Typography
        noWrap
        component="div"
        sx={{
          flexGrow: 1,
          display: { xs: 'flex', md: 'none' },
        }}
      >
        <NavLogo />
      </Typography>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <ModeSwitch isLightMode={isLightMode} toggleMode={toggleMode} />
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {pages.map((page: Page) => (
            <MobileLinkButton
              key={page.path}
              page={page}
              handleClick={handleCloseNavMenu}
            />
          ))}
        </Menu>
      </Box>
    </>
  );
};
export default MobileNavigation;

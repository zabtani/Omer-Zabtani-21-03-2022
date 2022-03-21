import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Page } from '../../../../interface/interface';
import LinkButton from './LinkButton';
import NavLogo from './NavLogo';
import ModeSwitch from './ModeSwitch';

interface Props {
  pages: Page[];
  toggleMode: () => void;
  isLightMode: boolean;
}

const DesktopNavigation = ({ pages, toggleMode, isLightMode }: Props) => {
  return (
    <>
      <Typography
        noWrap
        component="div"
        sx={{ flexGrow: 1, mr: 2, display: { xs: 'none', md: 'flex' } }}
      >
        <NavLogo />
      </Typography>

      <Box sx={{ alignItems: 'center', display: { xs: 'none', md: 'flex' } }}>
        <ModeSwitch isLightMode={isLightMode} toggleMode={toggleMode} />
        {pages.map((page: Page) => (
          <LinkButton key={page.path} page={page} handleClick={() => {}} />
        ))}
      </Box>
    </>
  );
};
export default DesktopNavigation;

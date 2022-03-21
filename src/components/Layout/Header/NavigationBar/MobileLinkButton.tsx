import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Page } from '../../../../interface/interface';
import { useStyles } from './useStyles';
import { MenuItem } from '@mui/material';

interface Props {
  page: Page;
  handleClick: () => void;
}
const MobileLinkButton = ({ page, handleClick }: Props) => {
  const classes = useStyles();

  return (
    <Link className={classes.link} to={page.path}>
      <MenuItem key={page.path} onClick={handleClick}>
        <Typography sx={{ color: 'black' }} textAlign="center">
          {page.title}
        </Typography>
      </MenuItem>
    </Link>
  );
};
export default MobileLinkButton;

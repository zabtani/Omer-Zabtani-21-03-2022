import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Page } from '../../../../interface/interface';
import { useStyles } from './useStyles';

interface Props {
  page: Page;
  handleClick: () => void;
}
const LinkButton = ({ page, handleClick }: Props) => {
  const classes = useStyles();

  return (
    <Link className={classes.link} to={page.path}>
      <Button
        key={page.path}
        onClick={handleClick}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        {page.title}
      </Button>
    </Link>
  );
};
export default LinkButton;

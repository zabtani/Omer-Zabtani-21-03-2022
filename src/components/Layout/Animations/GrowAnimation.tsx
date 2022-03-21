import Grow from '@mui/material/Grow';
interface Props {
  children: JSX.Element;
}
const GrowAnimation = ({ children }: Props) => {
  return (
    <Grow in={true} timeout={{ enter: 1000 }}>
      {children}
    </Grow>
  );
};

export default GrowAnimation;

import Fade from '@mui/material/Fade';

interface Props {
  children: JSX.Element;
}
const FadeAnimation = ({ children }: Props) => {
  return (
    <Fade in={true} timeout={{ enter: 650 }}>
      {children}
    </Fade>
  );
};

export default FadeAnimation;

import { useStyles } from './useStyles';
interface Props {
  text: string;
}
const InfoCard = ({ text }: Props) => {
  const classes = useStyles();
  return <div className={classes.card}> {text}</div>;
};
export default InfoCard;

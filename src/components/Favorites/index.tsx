import { Forecast } from '../../interface/interface';
import InfoCard from '../InfoCard';
import FadeAnimation from '../Layout/Animations/FadeAnimation';
import FavoriteCard from './FavortieCard';
import { useStyles } from './useStyles';
interface Props {
  locationsData: Forecast[];
}
const Favorites = ({ locationsData }: Props) => {
  const classes = useStyles();
  let content = <InfoCard text="Nothing Here Yet 😶" />;

  if (locationsData.length > 0) {
    content = (
      <div className={classes.favoritesContainer}>
        {locationsData.map((locationForecast: Forecast) => (
          <FavoriteCard
            key={locationForecast.id}
            favoriteData={locationForecast}
          />
        ))}
      </div>
    );
  }

  return (
    <FadeAnimation>
      <div>{content}</div>
    </FadeAnimation>
  );
};

export default Favorites;

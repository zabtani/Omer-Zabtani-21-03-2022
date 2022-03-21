import { useSelector } from 'react-redux';
import Favorites from '../components/Favorites';
import FadeAnimation from '../components/Layout/Animations/FadeAnimation';
import { favoriteLocationsSelector } from '../redux/location/location-selector';

const FavoritesScreen = () => {
  const favorites = useSelector(favoriteLocationsSelector);
  return (
    <FadeAnimation>
      <div>
        <Favorites locationsData={favorites} />
      </div>
    </FadeAnimation>
  );
};

export default FavoritesScreen;

import { useSelector } from 'react-redux';
import Favorites from '../components/Favorites';
import FadeAnimation from '../components/Layout/Animations/FadeAnimation';
import { favoritesSelector } from '../redux/forecast/forecast-selector';

const FavoritesScreen = () => {
  const favorites = useSelector(favoritesSelector);

  return (
    <FadeAnimation>
      <div>
        <Favorites locationsData={favorites} />
      </div>
    </FadeAnimation>
  );
};

export default FavoritesScreen;

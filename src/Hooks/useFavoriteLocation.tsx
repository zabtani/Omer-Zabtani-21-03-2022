import { useSelector } from 'react-redux';
import { Forecast, Location } from '../interface/interface';
import { favoritesSelector } from '../redux/forecast/forecast-selector';

interface Props {
  location: Location;
}

const useFavoriteCheck = ({ location }: Props) => {
  const favorites = useSelector(favoritesSelector);
  const isFavoriteLocation = favorites.some(
    (favorite: Forecast) => favorite.id === location.id
  );

  return { isFavoriteLocation };
};

export default useFavoriteCheck;

import classes from './App.module.css';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import Paths from './enums/Paths';
import FavoritesScreen from './screens/Favorites';
import WeatherScreen from './screens/Weather';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetch_user_location } from './redux/location/location-actions';
import Layout from './components/Layout/AppLayout';

function App() {
  const dispatch = useDispatch();

  //ASK FOR USER LOCATION AND FETCH IT IF APPROVED
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      let lat = position.coords.latitude.toString();
      let lon = position.coords.longitude.toString();
      dispatch(fetch_user_location({ lat, lon }));
    });
  }, [dispatch]);

  return (
    <div className={classes.app}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<Navigate to={Paths.WEATHER} />} />
            <Route
              path={Paths.HOME}
              element={<Navigate to={Paths.WEATHER} />}
            />
            <Route path={Paths.WEATHER} element={<WeatherScreen />} />
            <Route path={Paths.FAVORITES} element={<FavoritesScreen />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

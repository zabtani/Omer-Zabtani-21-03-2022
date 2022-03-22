import classes from './App.module.css';
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import Paths from './enums/Paths';
import FavoritesScreen from './screens/Favorites';
import WeatherScreen from './screens/Weather';
import Layout from './components/Layout/AppLayout';
import useUserLocation from './Hooks/useUserLocation';

function App() {
  useUserLocation();
  return (
    <div className={classes.app}>
      <Router basename="https://zabtani.github.io/Omer-Zabtani-21-03-2022/">
        <Routes>
          <Route path={Paths.BASE} element={<Layout />}>
            <Route path={'*'} element={<Navigate to={Paths.WEATHER} />} />
            <Route path={Paths.WEATHER} element={<WeatherScreen />} />
            <Route path={Paths.FAVORITES} element={<FavoritesScreen />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

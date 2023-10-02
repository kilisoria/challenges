import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import configureStore from './store/configureStore';

import HomePage from './pages/Home/HomePage';
import PlanetsListPage from './pages/Planets/PlanetsList/PlanetsListPage';
import PlanetPage from './pages/Planets/Planet/PlanetPage';
import ErrorPage from './pages/Error/ErrorPage';

const store = configureStore();

function App() {
  return (
  <Provider store={store}>
    <Router>
      <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/planets" render={() => <PlanetsListPage />} />
            <Route exact path="/planet-details" render={() => <PlanetPage/>} />
        <Route render={() => <ErrorPage />} />
      </Switch>
    </Router>
  </Provider>
  );
}

export default App;

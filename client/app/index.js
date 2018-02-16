import React from 'react';
import { render } from 'react-dom';

// React Router related
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

// Redux related
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';

// Containers
import App from './containers/App/App';
import NotFound from './containers/App/NotFound';
import Home from './containers/Home/Home';
import HelloWorld from './containers/HelloWorld/HelloWorld';

// Styles
import './styles/styles.scss';

// Redux
// Store is all this application data.
const store = createStore(allReducers);
// Reducer is a function that tells what data to store in store.
//         They take an action adn update part of the application
//         state. Reducers are broken down by parts.
// Provider makes your store/data available to the containers.

render((
  <Provider
    store={store}
  >
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/helloworld" component={HelloWorld}/>
          <Route component={NotFound}/>
        </Switch>
      </App>
    </Router>
  </Provider>
), document.getElementById('app'));

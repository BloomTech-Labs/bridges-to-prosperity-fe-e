import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BridgesContext } from './state/contexts/bridgesContext';
import { DetailsContext } from './state/contexts/detailsContext';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';
import { Security, LoginCallback } from '@okta/okta-react';

import 'antd/dist/antd.less';
import './styles/sass/index.scss';

import { NotFoundPage } from './components/pages/NotFound';
import { LoginPage } from './components/pages/Login';
import { config } from './utils/oktaConfig';
import { HomePage } from './components/pages/HomePage/index';
import DataVizReact from './components/pages/DataViz-react/RederDataVizReact';
import HomePageReact from './components/pages/HomePage-React/HomePageContent-React';
ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  const history = useHistory();

  const [bridgeData, setBridgeData] = useState();
  const [detailsData, setDetailsData] = useState();

  const authHandler = () => {
    // We pass this to our <Security /> component that wraps our routes.
    // It'll automatically check if userToken is available and push back to login if not :)
    history.push('/login');
  };

  return (
    <DetailsContext.Provider value={{ detailsData, setDetailsData }}>
      <BridgesContext.Provider value={{ bridgeData, setBridgeData }}>
        <Security {...config} onAuthRequired={authHandler}>
          <Switch>
            <Route path="/login" component={LoginPage} />
            {/* <Route path="/mapbox" component={DataVizReact} /> */}
            <Route path="/implicit/callback" component={LoginCallback} />
            {/* any of the routes you need secured should be registered as SecureRoutes */}
            <Route exact path="/" component={HomePage} />
            <Route exact path="/mapbox" component={HomePageReact} />
            <Route component={NotFoundPage} />
          </Switch>
        </Security>
      </BridgesContext.Provider>
    </DetailsContext.Provider>
  );
}

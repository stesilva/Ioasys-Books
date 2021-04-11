import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from './layout/Login';
import { Home } from './layout/Home';

function Routes() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default Routes;
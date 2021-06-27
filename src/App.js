import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/home-page';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact 
          path='/'
          render={() => <Redirect to='/home-page' /> }
        />  
        <Route exact path="/home-page">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

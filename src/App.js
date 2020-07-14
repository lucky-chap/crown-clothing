import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import { Switch, Route } from 'react-router-dom';

const HatsPage = () => (
  <h1>Hats Page</h1>
)

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;

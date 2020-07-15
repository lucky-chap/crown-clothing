import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop-page/Shop';
import Header from './components/Header/Header';
import { Switch, Route } from 'react-router-dom';


const App = () => {
  return (
    <div>
    {/* By placing the Header out of Switch, it is always rendered on all routes */}
     <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

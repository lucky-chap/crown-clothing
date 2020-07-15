import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop-page/Shop';
import Header from './components/Header/Header';
import SignInAndSignUp from './pages/signup-and-login/Signup-and-login';
import { Switch, Route } from 'react-router-dom';
// For accessing authenticated users
import { auth } from './firebase/firebase.config';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsuscribeFromAuth = null;

  componentDidMount() {
    // this.unsuscribeFromAuth gives a fucntion that when called
    // closes subscription to Firebase
  this.unsuscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }

  render() {
    return (
      <div>
      {/* By placing the Header out of Switch, it is always rendered on all routes */}
       <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }

}

export default App;

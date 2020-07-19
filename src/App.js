import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop-page/Shop';
import Header from './components/Header/Header';
import SignInAndSignUp from './pages/signup-and-login/Signup-and-login';
import Checkout from './pages/checkout/Checkout';
import { Switch, Route, Redirect } from 'react-router-dom';
// For accessing authenticated users
import { auth, createUserProfileDocument } from './firebase/firebase.config';
import { connect } from 'react-redux';

// imports the user action
import { setCurrentUser } from './redux/user/UserActions';

import { selectCurrentUser } from './redux/user/UserSelectors';


class App extends React.Component {
  unsuscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    // this.unsuscribeFromAuth gives a function that when called
    // closes subscription to Firebase
  this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // if (userAuth) means if the value of userAuth is not null
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // userRef.onSnapshot means any time there is data in the user reference object
        userRef.onSnapshot(snapShot => {
          // logs the actual credentials of the user
          // console.log(snapShot.data());

            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })


          // console.log(this.state);
        })

        } else {
          setCurrentUser(userAuth);
        }

    })
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }

  render() {
    return (
      <div>
      {/* By placing the Header out of Switch, it is always rendered on all routes */}
       <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={ () => this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUp /> } />
          <Route exact path='/checkout' component={Checkout} />
        </Switch>
      </div>
    );
  }

}


const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);

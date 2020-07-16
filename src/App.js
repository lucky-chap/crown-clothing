import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop-page/Shop';
import Header from './components/Header/Header';
import SignInAndSignUp from './pages/signup-and-login/Signup-and-login';
import { Switch, Route } from 'react-router-dom';
// For accessing authenticated users
import { auth, createUserProfileDocument } from './firebase/firebase.config';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsuscribeFromAuth = null;

  componentDidMount() {
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
          this.setState({
            currentUser: {
              // the id of the user is found on the snapShot and not on snapShot.data()
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        })

        } else {
          this.setState({ currentUser: userAuth });
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

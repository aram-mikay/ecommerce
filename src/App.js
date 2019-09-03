import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from './pages/checkout/checkout.component';
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import "./App.css";
import { selectCurrentUser } from './redux/user/user.selector';

class App extends React.Component {
  //Closing subscription
  unsubscribeFromAuth = null;

  //storing google Auth users state
  //whenever someone signs in/out we want to be aware of that
  componentDidMount()
  {
    
    const { setCurrentUser } = this.props;

    //paramater is user state
    //Open Subscription as long as app component is mounted on DOM
    //since it's an open sub we need to also close subs in order to avoid mem. leaks

    //async user callback since we will be making API calls

    //this code will work with email sign up also, since we have seperated our authentication and storage
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        //checking to see if user signs in
        //if there is document we will get document by userRef
        //if there is no document we will create it
        const userRef = await createUserProfileDocument(userAuth);
        //since userref is being returned from our func we can use it to check to see if DB has updated at this reference with new data

        //moment it instantiates will send us snapshot of object in our DB
        //onSnapshot- returns snapshot object and the objecct will provide data stored(if newly created) or already available

        //creating document with data we received back from userRef
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
          //console log in set state as second parameter, since set state is async and does not complete immedietely, so once setState makes bulk update then clog will fire
        });
      }

      //if user logs out we set current user to null from null we'll receive from auth library
      setCurrentUser(userAuth);
    });
  }

  //calling unsubscribe to close subcsription

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to='/' />) : <SignInAndSignUpPage />} />
          {/* redirecting our users if signed in so they do not mess with auth flow */}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  //dispatch - way for redux to know that the object being passed is an action object being passed to every reducer
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
//our app doesnt need currentUser anymore we will use m
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

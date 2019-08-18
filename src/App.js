import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth } from "./firebase/firebase.utils";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  //Closing subscription 
  unsubscribeFromAuth = null;

  //storing google Auth users state
  //whenever someone signs in/out we want to be aware of that
  componentDidMount()
  {
    //paramater is user state
    //Open Subscription as long as app component is mounted on DOM
    //since it's an open sub we need to also close subs in order to avoid mem. leaks
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>
    {
      this.setState({ currentUser: user });
      console.log(user);
      //provides us console info of user signed in from google i.e displayName and email
      //oAuth allows users to sign in from any service they may have i.e twitter, fb etc
    })
  }

  //calling unsubscribe to close subcsription 

  componentWillUnmount()
  {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

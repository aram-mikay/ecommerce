import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'; 
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

import "./header.style.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/">
        {" "}
        HOME
      </Link>
      <Link className="option" to="/shop">
        {" "}
        SHOP
      </Link>
      <Link className="option" to="/shop">
        {" "}
        CONTACT
      </Link>
      {/* conditional rendering for sign in/out link depening on currentUser state  */}
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

//mapStateToProps and connect will be used anywhere we need to pass our state to props

//state is the root reducer, allows us to access state
const mapStateToProps = state => ({
    //getting that null value as currentUser being passed in as currentUser
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);

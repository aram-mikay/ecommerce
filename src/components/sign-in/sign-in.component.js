import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
      const { email, password } = this.state;

      try
      {
          await auth.signInWithEmailAndPassword(email, password);
          //if successful we clear our state
          this.setState({ email: "", password: "" });
      } catch (error)
      {
          console.log(error);
      }
      
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form action="" onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
            {/* isGoogleSignIn will be the prop passed to our custom button if no value applied will be true */}
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;

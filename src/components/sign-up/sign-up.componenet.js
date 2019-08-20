import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';


class SignUp extends React.Component
{
    constructor()
    {
        super();


        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event =>
    {
        //preventing default form submit behavior 
        event.preventDefault();


        
        const { displayName, email, password, confirmPassword } = this.state;

        //check to see if pass and confirm pass match
        if (password !== confirmPassword)
        {
            alert("Passwords don't match!");
            return;
        }

        try
        {
            //creates a new user account with specified email and pass and returns user   
            //we pass it email and password that we have destructured off our state
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            //waiting for createUserProfileDocument to finish and when it does then we will run setState
            await createUserProfileDocument(user, { displayName });
        } catch (error)
        {
            console.error(error);
        }

    };

    handleChange = event =>
    {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render()
    {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form action="" className='sign-up-form' onSubmit={this.handleSubmit}>
                    
                    <FormInput type='text' name='displayName' value={displayName} onChange={this.handleChange} label='Display Name' required></FormInput>
                    
                    <FormInput type='email' name='email' value={email} onChange={this.handleChange} label='Email' required></FormInput>
                    
                    <FormInput type='password' name='password' value={password} onChange={this.handleChange} label='Password' required></FormInput>
                    
                    <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} label='Confirm Password' required></FormInput>
                    
                <CustomButton type='submit'> SIGN UP</CustomButton>

                </form>
            </div>
        )
    }
}


export default SignUp;
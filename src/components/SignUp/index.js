import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
const SignUpPage = () => (
  <div>
    
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  isAdmin: false,
  error: null,
  phone:null,
 
  amount:0,
  profit:0
};

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
  Try to login with this account instead. If you think the
  account is already used from one of the social logins, try
  to sign in with one of them. Afterward, associate your accounts
  on your personal account page.
`;

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne, isAdmin,phone ,amount,profit} = this.state;
    const roles = {};

    

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email,
          phone,
         amount,
         profit,
      
        });
      })
      .then(() => {
        return this.props.firebase.doSendEmailVerification();
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }

        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onChangeCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
    amount,profit,  
      error,
      phone
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
    
			<div className="sign__box">
				
		
      <div class="sign">
      <div class="sign__content">
      <form onSubmit={this.onSubmit} className="sign__form">
      <a href="index.html"><img class="sign__logo" src={require("../../static/home-bg.png")} alt=""/></a>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
          class="form__input"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
          className="form__input"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
          className="form__input"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
          className="form__input"
        />
       
         <PhoneInput
      placeholder="Enter phone number"
      value={this.state.phone}  className="form__input"
      onChange={phone=>{this.setState({phone}
        
       )
        console.log(this.state.phone);}
     
      }/>
       
        <button disabled={isInvalid} type="submit"  className={`btn ${isInvalid}`}  >
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
        <div class="form__group">
					<input id="terms" name="terms" type="checkbox"/>
					<label for="terms">I agree to the <a href="#" target="_blank">Privacy Policy</a></label>
				</div>
        <p>Already have an account? <a href="login.html">Log in</a></p>
      </form>
      
      </div>
      </div>
      </div>
      
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };

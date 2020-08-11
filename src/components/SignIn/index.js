import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import Particles from 'react-particles-js';
import Footer from '../../components/Landing/footer';
const SignInPage = () => (
  <div>
       <header className="header yy">
      <Particles
        width="100px"
        height="70px"
        style={{
          background: `transparent`,
        }}
        params={{
          particles: {
            color: {
              value: '#D4AF37',
            },
            line_linked: {
              enable: true,
              distance: 50,
              color: '#ffff',
              opacity: 1,
              width: 1.5,
            },
          },
        }}
      />
      <div className="header__logo">
        <a href="/" className="a">
          <img
            src={require('../../static/home-bg.png')}
            className="img smaller"
            alt=""
          />
        </a>
      </div>

      <ul className="header__nav">
        
        <li>
          <a href="/about" className="a">
            About Us
          </a>
        </li>
        <li>
          <a
            href="https://bitcointicker.co/transactions/"
            className="a"
          >
            Live Payout
          </a>
        </li>
        <li>
          <a href="/pricing" className="a">
            Pricing
          </a>
        </li>
        <li>
        <a href="/contactus" className="a">
       Customer Service
          </a>
        </li>
        <li>
          <a href="/whymining" className="a">
            Why Mining
          </a>
        </li>
        {
          //<li className="dropdown header__dropdown">
          //<a
          //  className="dropdown-toggle a"
          //  href="/account"
          //  id="dropdownMenuLink2"
          // >
          //   DashBoard
          //</li></li> </a>}
          //  </li>
        }
        <li class="dropdown header__dropdown">
          <a
            class="dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Technology
          </a>

          <ul
            class="dropdown-menu header__dropdown-menu"
            aria-labelledby="dropdownMenuLink1"
          >
            <li>
              <a href="/enigma" style={{color:"black"}}>Enigma Data center</a>
            </li>
            <li>
              <a href="/radiant-tech" style={{color:"black"}}>Radiant Tech</a>
            </li>
          </ul>
        </li>
      </ul>

      <div className="  hyy header__btns ">
        <a
          href="/account"
          className=" hyy btn btn--transparent btn--header a"
        >
          log in
        </a>
        <a
          href="/signup"
          className="  hyy btn btn--white btn--header a"
        >
         REGISTER
        </a>
      </div>

      <button className="header__menu button" type="button">
        <i className="ti-menu" />
        <i className="ti-close" />
      </button>
    </header>
    <SignInForm />
    <div>
      <h1 style={{ textAlign: 'center', margin: '0 auto' }}>
        Epic-Mining Features
      </h1>
      <p style={{ textAlign: 'center', margin: '0 auto' }}> Check out some of the best features in the industry.
</p>
    </div>
    <div
      
    >
      <div className="feat">
        <div>
          <img
            src={require('../../static/miner.PNG')}
            alt=""
            style={{
              margin: '0 auto',
             minWidth:'150px' ,minHeight:'150px',maxWidth: '151px',maxHeight:'151px'
            }}
          />
          <h2>State of the Art Mining Technology</h2>
          <p class="reveal reveal-650 reveal_visible">
            We are heavily investing in the best available hardware to
            stay at the edge of technology. For you, it is the easiest
            way of mining: no need to assemble rigs or to have hot,
            loud miners in your home.
          </p>
        </div>
        <div>
          {' '}
          <img
            src={require('../../static/bitmine.PNG')}
            alt=""
            style={{ margin: '0 auto',   minWidth:'150px' ,minHeight:'150px',maxWidth: '151px',maxHeight:'151px' }}
          />
          <h2>BITCOIN MINING</h2>
          <p class="reveal reveal-650 reveal_visible">
          Use state of the art hardware in our data centers to mine the most valuable cryptocurrency!
          </p>
        </div>
        <div>
          <img
            src={require('../../static/coin.svg')}
            alt=""
            style={{ margin: '0 auto',  minWidth:'120px' ,minHeight:'120px',maxWidth: '151px',maxHeight:'151px',padding:'30px' }}
          />
          <h2 class="reveal reveal-992 reveal_visible">
           ETHEREUM MINING
          </h2>
          <p class="reveal reveal-992 reveal_visible">
          Mine ethereum on our highly efficient mining cluster for scrypt based coins.
          </p>
        </div>
        <div>
          <img
            src={require('../../static/outmine.PNG')}
            alt=""
            style={{ margin: '0 auto',  minWidth:'150px' ,minHeight:'150px',maxWidth: '151px',maxHeight:'151px'}}
          />
          <h2 class="reveal reveal-full reveal_visible">
          DAILY MINING OUTPUTS
          </h2>
          <p class="reveal reveal-full reveal_visible">
          Start mining today! Your mining rigs are already set up and running. As soon as your payment is received, you can start mining and receive your first coins.
          </p>
        </div>{' '}
       
      </div>
    </div>
    <Footer/>
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

const ERROR_CODE_ACCOUNT_EXISTS =
  'auth/account-exists-with-different-credential';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`;

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.ACCOUNT);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <div className="sign">
        <div id="particles-js" className="sign__particles" />

        <div className="sign__content">
          <form onSubmit={this.onSubmit} className="sign__form">
          <div style={{color:'black',fontWeight:'bold',margin:'10px auto'}}><h1>Login</h1></div>
            <div style={{color:'black',fontWeight:'bold',margin:'10px auto'}}>Please Enter your Login Details</div>
            <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
              className="form__input"
            />
            <input
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
              className="form__input"
            />
            <button
              disabled={isInvalid}
              type="submit"
              className="btn"
            >
              Sign In
            </button>
            <PasswordForgetLink />
            {error && <p>{error.message}</p>}
          </form>
          <SignUpLink />
        </div>
      </div>
    );
  }
}

class SignInGoogleBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = event => {
    this.props.firebase
      .doSignInWithGoogle()
      .then(socialAuthUser => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase.user(socialAuthUser.user.uid).set({
          username: socialAuthUser.user.displayName,
          email: socialAuthUser.user.email,
          roles: {},
        });
      })
      .then(() => {
        this.setState({ error: null });
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

  render() {
    const { error } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <button type="submit">Sign In with Google</button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

class SignInFacebookBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = event => {
    this.props.firebase
      .doSignInWithFacebook()
      .then(socialAuthUser => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase.user(socialAuthUser.user.uid).set({
          username: socialAuthUser.additionalUserInfo.profile.name,
          email: socialAuthUser.additionalUserInfo.profile.email,
          roles: {},
        });
      })
      .then(() => {
        this.setState({ error: null });
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

  render() {
    const { error } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <button type="submit">Sign In with Facebook</button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

class SignInTwitterBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = event => {
    this.props.firebase
      .doSignInWithTwitter()
      .then(socialAuthUser => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase.user(socialAuthUser.user.uid).set({
          username: socialAuthUser.additionalUserInfo.profile.name,
          email: socialAuthUser.additionalUserInfo.profile.email,
          roles: {},
        });
      })
      .then(() => {
        this.setState({ error: null });
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

  render() {
    const { error } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <button type="submit">Sign In with Twitter</button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

const SignInGoogle = compose(
  withRouter,
  withFirebase,
)(SignInGoogleBase);

const SignInFacebook = compose(
  withRouter,
  withFirebase,
)(SignInFacebookBase);

const SignInTwitter = compose(
  withRouter,
  withFirebase,
)(SignInTwitterBase);

export default SignInPage;

export { SignInForm, SignInGoogle, SignInFacebook, SignInTwitter };

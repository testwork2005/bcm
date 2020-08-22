import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Particles from 'react-particles-js';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Footer from '../Landing/footer';
import Moment from 'moment';
const SignUpPage = () => {
  return (
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
                <a href="/enigma" style={{ color: 'black' }}>
                  Enigma Data center
                </a>
              </li>
              <li>
                <a href="/radiant-tech" style={{ color: 'black' }}>
                  Radiant Tech
                </a>
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
      <SignUpForm />
      <div>
        <h1 style={{ textAlign: 'center', margin: '0 auto' }}>
          Epic-Mining Features
        </h1>
        <p style={{ textAlign: 'center', margin: '0 auto' }}>
          {' '}
          Check out some of the best features in the industry.
        </p>
      </div>
      <div>
        <div className="feat">
          <div>
            <img
              src={require('../../static/miner.PNG')}
              alt=""
              style={{
                margin: '0 auto',
                minWidth: '150px',
                minHeight: '150px',
                maxWidth: '151px',
                maxHeight: '151px',
              }}
            />
            <h2>State of the Art Mining Technology</h2>
            <p class="reveal reveal-650 reveal_visible">
              We are heavily investing in the best available hardware
              to stay at the edge of technology. For you, it is the
              easiest way of mining: no need to assemble rigs or to
              have hot, loud miners in your home.
            </p>
          </div>
          <div>
            {' '}
            <img
              src={require('../../static/bitmine.PNG')}
              alt=""
              style={{
                margin: '0 auto',
                minWidth: '150px',
                minHeight: '150px',
                maxWidth: '151px',
                maxHeight: '151px',
              }}
            />
            <h2>BITCOIN MINING</h2>
            <p class="reveal reveal-650 reveal_visible">
              Use state of the art hardware in our data centers to
              mine the most valuable cryptocurrency!
            </p>
          </div>
          <div>
            <img
              src={require('../../static/coin.svg')}
              alt=""
              style={{
                margin: '0 auto',
                minWidth: '120px',
                minHeight: '120px',
                maxWidth: '151px',
                maxHeight: '151px',
                padding: '30px',
              }}
            />
            <h2 class="reveal reveal-992 reveal_visible">
              ETHEREUM MINING
            </h2>
            <p class="reveal reveal-992 reveal_visible">
              Mine ethereum on our highly efficient mining cluster for
              scrypt based coins.
            </p>
          </div>
          <div>
            <img
              src={require('../../static/outmine.PNG')}
              alt=""
              style={{
                margin: '0 auto',
                minWidth: '150px',
                minHeight: '150px',
                maxWidth: '151px',
                maxHeight: '151px',
              }}
            />
            <h2 class="reveal reveal-full reveal_visible">
              DAILY MINING OUTPUTS
            </h2>
            <p class="reveal reveal-full reveal_visible">
              Start mining today! Your mining rigs are already set up
              and running. As soon as your payment is received, you
              can start mining and receive your first coins.
            </p>
          </div>{' '}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  isAdmin: false,
  error: null,
  phone: null,

  balance: 0,
  profit: 0,
  hashpower: 0,
  ismining: false,
  plan: 0,
  oldbalance: 0,
  ethbalance: 0,
  oldethbalance: 0,
  ethhashpower: 0,
  isverified:false
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
    const {
      username,
      email,
      passwordOne,
      isAdmin,
      phone,
      profit,
      plan,
      balance,
      ismining,
      hashpower,
      oldbalance,
      ethbalance,
      oldethbalance,
      ethhashpower,
      isverified
    } = this.state;
    const roles = {};
    //set HTTPS=true&&npm start

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database

        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email,
          phone,
          balance,
          profit,
          ismining,
          hashpower,
          plan,
          oldbalance,
          ethbalance,
          oldethbalance,
          ethhashpower,
          isverified

        });
      }) 
      .then(() => {
        return this.props.firebase.doSendEmailVerification();
      })
     
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.ACCOUNT);
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
      balance,
      profit,
      error,
      phone,
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
              <div
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  margin: '10px auto',
                }}
              >
                <h1>Register</h1>
              </div>
              <div
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  margin: '10px auto',
                }}
              >
                Please Enter your Personal Details
              </div>

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
                value={this.state.phone}
                className="form__input"
                onChange={phone => {
                  this.setState({ phone });
                  console.log(this.state.phone);
                }}
              />

              <button
                disabled={isInvalid}
                type="submit"
                className={`btn ${isInvalid}`}
              >
                Sign Up
              </button>

              {error && <p>{error.message}</p>}
              <div>
                <input id="terms" name="terms" type="checkbox" />
                <label for="terms">
                  I agree to the{' '}
                  <a href="/privacy" target="_blank">
                    Privacy Policy
                  </a>
                </label>
              </div>
              <div>
                <input id="news" name="terms" type="checkbox" />
                <label for="terms">Recieve our newsletter</label>
              </div>

              <p>
                Already have an account? <a href="/signin">Log in</a>
              </p>
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

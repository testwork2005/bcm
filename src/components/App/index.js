import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Dashboard';
import PricingPage from '../pricing';
import WhyPage from '../whymining';
import Review from '../reviewcontainer';
import Blogpage from '../blog';
import AboutPage from '../about';
import ContactPage from "../contact";
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => {
 
  return (
    <div>
      <Review />
      <Router>
        <div>
          <Route
            exact
            path={ROUTES.LANDING}
            component={LandingPage}
          />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.WHYMINING} component={WhyPage} />
          <Route path={ROUTES.CONTACTUS} component={ContactPage} />
          <Route path={ROUTES.ABOUT} component={AboutPage} />
          <Route path={ROUTES.BLOG} component={Blogpage} />
          <Route
            path={ROUTES.PASSWORD_FORGET}
            component={PasswordForgetPage}
          />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.PRICING} component={PricingPage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />

          <Route path={ROUTES.ADMIN} component={AdminPage} />
        </div>
      </Router>
    </div>
  );
};

export default withAuthentication(App);

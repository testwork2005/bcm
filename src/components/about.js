import React from 'react';
import Particles from 'react-particles-js';
import Timeline from '../components/timeline';
import Paper from '@material-ui/core/Paper';
import MapChart from '../components/map';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

import Slider from 'react-slick';
import ForwardIcon from '@material-ui/icons/Forward';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'transparent',
    marginTop: '-50px',
    color: '#f0b90b',
    padding: '5%',
  },
  icon: {
    color: '#f0b90b',
    float: 'right',
    paddingRight: '10px',
    width: '40px',
  },
  headtext: {
    color: 'white',
    fontWeight: 'bolder',
  },
}));
export default function about() {
  const classes = useStyles();
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
              src={require('../static/home-bg.png')}
              className="img"
              alt=""
            />
          </a>
        </div>

        <ul className="header__nav">
          <li>
            <a href="#" className="a">
              Home{' '}
            </a>
          </li>
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
            Contact Us
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
                <a href="index.html" style={{ color: 'black' }}>
                  Enigma Data center
                </a>
              </li>
              <li>
                <a href="index2.html" style={{ color: 'black' }}>
                  Radiant Tech
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <div className="  hyy header__btns ">
          <a
            href="/signin"
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
      <div className="bgg">
        <h2>ONE OF THE WORLD'S LEADING</h2>
        <h1>
          <strong>HASH POWER PROVIDER</strong>
        </h1>
        <div
          style={{
            padding: '10px',
            margin: '15px auto',
            backgroundColor: '#f0b90b',
          }}
        >
          Watch Our Video Below
        </div>
      </div>
      <Divider dark />
      <Paper>
        <div className="timecontainer">
          <Timeline />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            {' '}
            <video
              playsinline="playsinline"
              controls
              width="600"
              style={{ margin: '0 auto' }}
            >
              <source src="img/homevid.mp4" type="video/mp4" />
            </video>
            <Divider light />
            <h1>
              <strong>Making mining accessible to everyone</strong>
            </h1>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Binance CryptoMining is one of the leading hashpower
              providers in the world, offering cryptocurrency mining
              capacities in every range - for newcomers, interested
              home miners, as well as large scale investors. Our
              mission is to make acquiring cryptocurrencies easy and
              fast for everyone. We provide a multi-algorithm,
              multi-coin cloud mining service using the latest
              technology - without any pool fees. The ultimate goal of
              our existence is to make cryptocurrency mining an easy,
              smart and rewarding experience for all. Our services
              already attracted more than 2.000.000 people - We’d be
              happy to serve you as well!
            </p>
          </div>
        </div>
      </Paper>
      <div style={{ padding: '5%' }}>
        {' '}
        <h1>
          <strong style={{ margin: '0 auto',textAlign:'center' }}>Our mining farms</strong>
        </h1>
        <small style={{ margin: '0 auto',textAlign:'center' }}>
          Disclaimer: The displayed datacenters represent only a
          fraction of the mining operations we own. Since security and
          customer protection are our highest priorities, not all data
          centers are shown. Nevertheless, we are able to take footage
          and set up live feeds at low-risk locations and we do so
          without disclosing sensitive information or critical
          intellectual property.
        </small>
        <Divider light />
        <MapChart />
      </div>
      <Divider light />
      <div className="getstarted">
        <div>
          <h1 className="st">
            How would you like to <br />
            get started?
          </h1>
        </div>
        <Paper elevation={3}>
          <div className="startguide">
            <Paper elevation={2} style={{ minWidth: ' 400px' }}>
              <div className="startitems">
                <h3 className="action">
                  <strong>Create Account</strong>
                  <ForwardIcon className={classes.icon} />
                </h3>
                <p>join our growing community</p>
              </div>
            </Paper>
            <Paper elevation={2} style={{ minWidth: ' 400px' }}>
              <div className="startitems">
                <h3 className="action">
                  <strong>Get to know us better.</strong>{' '}
                  <ForwardIcon className={classes.icon} />
                </h3>
                <p>
                  <span>Read about our vision!</span>
                </p>
              </div>
            </Paper>
            <Paper elevation={2} style={{ minWidth: ' 400px' }}>
              <div className="startitems">
                <h3 className="action">
                  <strong>See our pricing.</strong>
                  <ForwardIcon className={classes.icon} />
                </h3>
                <p>
                  <span>
                    Each algorithm and coin has its own beauty!
                  </span>
                </p>
              </div>
            </Paper>
            <Paper elevation={2} style={{ minWidth: ' 400px' }}>
              <div className="startitems">
                <h3 className="action">
                  <strong>Learn more about our tech.</strong>
                  <ForwardIcon className={classes.icon} />
                </h3>
                <p>
                  <span>The Enigma Datacenter and Radiant Tech.</span>
                </p>
              </div>
            </Paper>
            <Paper elevation={2} style={{ minWidth: ' 400px' }}>
              <div className="startitems">
                <h3 className="action">
                  <strong>See what we can do for you!</strong>
                  <ForwardIcon className={classes.icon} />
                </h3>
                <p>
                  <span>
                    Any questions left? Get in touch with our customer
                    service.
                  </span>
                </p>
              </div>
            </Paper>
          </div>
        </Paper>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="footer__logo">
                <a href="index.html" className="a">
                  <img
                    src={require('../static/home-bg.png')}
                    className="img"
                    alt=""
                  />
                </a>
              </div>
            </div>

            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <h6 className="footer__title">Features</h6>
              <ul className="footer__list ul">
                <li>
                  <a href="#" className="a">
                    Instant connection
                  </a>
                </li>
                <li>
                  <a href="#" className="a">
                    Instant conclusion
                  </a>
                </li>
                <li>
                  <a href="#" className="a">
                    Detailed statistics
                  </a>
                </li>
                <li>
                  <a href="#" className="a">
                    Power distribution
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <h6 className="footer__title">Company</h6>
              <ul className="footer__list ul">
                <li>
                  <a href="#" className="a">
                    Customers
                  </a>
                </li>
                <li>
                  <a href="#" className="a">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="a">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="a">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <h6 className="footer__title">Contact</h6>
              <ul className="footer__list ul">
                <li>
                  <a href="tel:+18002345678">+1 (800) 234-5678</a>
                </li>
              </ul>
            </div>

            <div className="col-12">
              <div className="footer__copyright">
                <ul className="ul">
                  <li>
                    <a href="#" className="a">
                      About BinanceCrypto Mine
                    </a>
                  </li>
                  <li>
                    <a href="#" className="a">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

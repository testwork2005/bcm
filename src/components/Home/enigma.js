import React from 'react';
import Particles from 'react-particles-js';
import Rad from '../radiantslider';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Review from '../reviewcontainer';
import Slider from 'react-slick';
import ForwardIcon from '@material-ui/icons/Forward';
import Img1 from '../../static/logo.svg';
import Img2 from '../../static/forbes.svg';
import Img3 from '../../static/cnbc.svg';
import Img4 from '../../static/bloom.svg';
import Img5 from '../../static/tech.svg';

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
      <Review />
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
            className="img"
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
      <div className="bgg">
        <br />
        <h2 style={{ color: '#f0b90b' }}> EXPLORE ENIGMA</h2>

        <small>
          The evolution of one of the world’s largest cryptocurrency
          mining facilities
        </small>

        <div
          style={{
            padding: '10px',
            margin: '15px auto',
          }}
        >
          <video
            playsinline="playsinline"
            controls
            muted="muted"
            autoPlay
            width="600"
            className="smallvids"
          >
            <source src="img/homevid.mp4" type="video/mp4" />
          </video>
        </div>

        <div
          style={{
            padding: '10px',
            margin: '15px auto',
            backgroundColor: '#f0b90b',
          }}
          onClick={() => {
            window.location.href = '/account';
          }}
        >
          BECOME A MINER TODAY!
        </div>
      </div>
      <section className="press">
        <img src={Img1} />
        <img src={Img2} /> <img src={Img3} /> <img src={Img4} />{' '}
        <img src={Img5} />
      </section>
      <section>
        <div
          style={{
            display: 'flex',
            margin: '40px',
            justifyContent: 'space-around',
          }}
        >
          <div style={{ maxWidth: '70vw' }}>
            {' '}
            <h1
              style={{
                color: '#f0b90b',
                textAlign: 'center',
                margin: '30px',
              }}
            >
              “As cryptocurrency networks grow, so must their
              computing power!”
            </h1>
            <p style={{ textAlign: 'center' }}>
              Enigma is one of the largest cryptocurrency mining
              facilities in the world. First built to exclusively mine
              Ethereum, the facility is being continuously upgraded
              for mining state-of-the-art Blockchain technology.
              Enigma’s computational performance is achieved with
              specifically designed mining rigs that efficiently mine
              hashing algorithms for various cryptocurrencies such as
              Zcash, Dash, Monero and others. The Enigma facility is
              powered by geothermal energy, and resides in the capital
              of Iceland. Scroll down for more in-depth information on
              how Enigma mines cryptocurrency!
            </p>
          </div>
          <div>
            {' '}
            <img
              src={require('../../static/enigma-4-.jpg')}
              alt="enigma"
              width="450"
            />
          </div>
        </div>
      </section>

      <Rad />
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
        className="blueenigma"
      >
        <h1
          style={{
            color: 'white',
            textAlign: 'center',
            margin: '30px',
            fontWeight: 'bold',
            fontFamily: 'Noto Sans JP, sans-serif',
            letterSpacing: '3px',
          }}
        >
          Join Our evolution!
        </h1>

        <div
          style={{
            padding: '10px',
            margin: '15px auto',
            backgroundColor: 'white',
            color: 'black',
            fontWeight: 'bold',
            fontFamily: 'Noto Sans JP, sans-serif',
            letterSpacing: '1px',
          }}
          onClick={() => {
            window.location.href = '/account';
          }}
        >
          BECOME A MINER TODAY!
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="footer__logo">
                <a href="/home" className="a">
                  <img
                    src={require('../../static/home-bg.png')}
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

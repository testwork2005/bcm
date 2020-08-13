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
import Rev from '../components/review';
import Slider from 'react-slick';
import ForwardIcon from '@material-ui/icons/Forward';

import Footer from './Landing/footer';

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
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 6000,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
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
      <div
        className="bgg"
        style={{
          height: '60vh',
        }}
      >
        <br />
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
            <h3 style={{ opacity: '0.5' }}>Identity</h3>
            <h1>
              <strong>Who we are</strong>
            </h1>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <p style={{ maxWidth: '40%', margin: '0 auto' ,textAlign:'left'}}>
                The story of   Epic-Mining started at the end
                of 2013. Our founders got to know each other by using
                the same platform for buying and selling Bitcoins.
                They were fascinated by the technology and wanted to
                build their own farm, only to realize all their
                friends wanted to participate as well.
              </p>
              <p style={{ maxWidth: '40%', margin: '0 auto',textAlign:'left' }}>
                They came up with the idea of mining as a service and
                built the first mining farm in Eastern Europe. Since
                our founding, we have grown tremendously and a lot has
                happened, but one thing remains constant: We are all
                strong believers in the future of digital currencies
                and we love being part of this growing community.
              </p>
            </div>
          </div>
        </div>
      </Paper>
      <Divider />
      <div style={{ display: 'flex', flexDirection: 'column',margin:'5%' }}>
        <h3 style={{ opacity: '0.5', margin: '10px auto' }}>
          Mission & Vision
        </h3>
        <h1 style={{ margin: '10px auto' }}>
          <strong>Making mining accessible to everyone</strong>
        </h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            margin: '0 auto',
          }}
        >
          <p style={{ maxWidth: '40%', margin: '0 auto',textAlign:'left'}}>
          Epic-Mining is one of the leading hashpower
            providers in the world, offering cryptocurrency mining
            capacities in every range - for newcomers, interested home
            miners, as well as large scale investors. Our mission is
            to make acquiring cryptocurrencies easy and fast for
            everyone.
          </p>
          <p style={{ maxWidth: '40%', margin: '0 auto',textAlign:'left' }}>
            We provide a multi-algorithm, multi-coin cloud mining
            service using the latest technology - without any pool
            fees. The ultimate goal of our existence is to make
            cryptocurrency mining an easy, smart and rewarding
            experience for all. Our services already attracted more
            than 2.000.000 people - We’d be happy to serve you as
            well!
          </p>
        </div>
      </div>
<div style={{margin:'30px auto',display:'flex',justifyContent:'center',backgroundColor:'#f0b90b',maxWidth:'250px'}}><Rev/></div>
      <img
        src={require('../static/sbg.jpg')}
        alt=""
        className="backimg"
      />
      <Paper>
        <div
          style={{
           
            marginTop: '-30%',
            backgroundColor: 'white',
          }}
        >
          {' '}
          <div style={{
              margin: '0 auto',
              textAlign: 'center',
              color: 'white',
              fontWeight: 'bold',
              maxWidth:'500px'
            }}>

          <h1   style={{
                margin: '0 auto',
                textAlign: 'center',
                color: 'white',
              }}>
            <strong
              style={{
                margin: '0 auto',
                textAlign: 'center',
                color: 'white',
              }}
            >
              Our mining farms
            </strong>
          </h1>
          <small
            style={{
              margin: '0 auto',
              textAlign: 'center',
              color: 'white',
              fontWeight: 'bold',
              width:'500px'
            }}
          >
            Disclaimer: The displayed datacenters represent only a
            fraction of the mining operations we own. Since security
            and customer protection are our highest priorities, not
            all data centers are shown. Nevertheless, we are able to
            take footage and set up live feeds at low-risk locations
            and we do so without disclosing sensitive information or
            critical intellectual property.
          </small>
          </div>
          <Divider light />
         
            <MapChart />
         
        </div>
      </Paper>
      <Divider light />

      <div
        style={{ display: 'flex', justifyContent: 'space-around' }}
      >
        <div style={{ maxWidth: '40%' }}>
          <h2 style={{textAlign:'center',margin:'5px auto'}}> TESTIMONIALS</h2>
          <Slider {...settings}>
            <div className="review">
              <blockquote className="review__blockquote">
               Epic-Mining is one of the leading
                cloudmining companies and a trustworthy partner of
                ours. It’s good to see that they are an honest
                cloudmining service which shows their farms openly to
                the public.
              </blockquote>
              <span className="review__autor">
                Guy Corem, CEO Spondoolies-Tech
                <span>
                  Leading Bitcoin Asic Manufacturing Company
                </span>
              </span>
            </div>
            <div>
              <div className="review">
                <blockquote className="review__blockquote">
                  MinerEU is very happy to have Genesis Mining as our
                  trustworthy partner. We have already recommended
                  Genesis-Mining to thousands of our existing
                  customers who are happy and satisfied with their
                  excellent services and products.
                </blockquote>
                <span className="review__autor">
                  Alex,
                  <span>
                    VP of business development from Innosilicon
                  </span>
                </span>
              </div>
            </div>
            <div>
              <div className="review">
                <blockquote className="review__blockquote">
                Epic-Mining is one of our biggest clients
                  and proven to be a reliable and trustworthy business
                  partner. Their transparent mining sites and high
                  quality software infrastructure together with our
                  high end mining hardware result in a great and
                  unique product and experience for everybody
                  interested in mining!
                </blockquote>
                <span className="review__autor">
                  Alex,
                  <span>
                    VP of business development from Innosilicon
                  </span>
                </span>
              </div>
            </div>
            <div>
              <div className="review">
                <blockquote className="review__blockquote">
                Epic-Mining is one of our biggest clients
                  and proven to be a reliable and trustworthy business
                  partner. Their transparent mining sites and high
                  quality software infrastructure together with our
                  high end mining hardware result in a great and
                  unique product and experience for everybody
                  interested in mining!
                </blockquote>
                <span className="review__autor">
                  Jing Wei, CEO of MinerEU
                  <span>
                    Leading Scrypt Asic Manufacturing Company
                  </span>
                </span>
              </div>
            </div>
          </Slider>
        </div>
        <div style={{display:'flex',flexDirection:'column'}}>
          <div><h1>Our Company Documents</h1></div>
          <div style={{display:'flex',justifyContent:'space-between'}}> 
        <div >
         
          <img src={require('../static/certificate.png')} alt="" style={{margin:'10px 0'}}/>
          <br />
          <a
            href={require('../static/binancedoc.pdf')}
            target="_blank"
          >
            Company Document{' '}
          </a>
        </div>

        <div>
          <img src={require('../static/certificate.png')} alt=""style={{margin:'10px 0'}} />{' '}
          <br />
          <a href={require('../static/BCM.docx')} target="_blank">
            Contract Document{' '}
          </a>
        </div>
        </div>
        </div>
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
                  <div
                    className="startitems"
                    onClick={() => {
                      window.location.href = '/account';
                    }}
                  >
                    <h3 className="action">
                      <strong>Create Account</strong>
                      <ForwardIcon className={classes.icon} />
                    </h3>
                    <a href="/signup" />{' '}
                    <p>join our growing community</p>
                  </div>
                </Paper>
                <Paper elevation={2} style={{ minWidth: ' 400px' }}>
                  <div className="startitems"   onClick={() => {
                      window.location.href = '/about';
                    }}>
                    <h3 className="action">
                      <strong>Get to know us better.</strong>{' '}
                      <ForwardIcon className={classes.icon} />
                    </h3>
                    <p>
                      <span>
                        Read about our <a href="/about"> vision!</a>{' '}
                      </span>
                    </p>
                  </div>
                </Paper>
                <Paper elevation={2} style={{ minWidth: ' 400px' }}>
                  <div className="startitems"   onClick={() => {
                      window.location.href = '/pricing';
                    }}>
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
                  <div className="startitems"  onClick={() => {
                      window.location.href = '/enigma';
                    }}>
                    <h3 className="action">
                      <strong>Learn more about our tech.</strong>
                      <ForwardIcon className={classes.icon} />
                    </h3>
                    <p>
                      <span>
                        The <a href="/enigma">Enigma Datacenter</a>
                        Enigma Datacenter and{' '}
                        <a href="/radiant-tech">Radiant Tech</a>.
                      </span>
                    </p>
                  </div>
                </Paper>
                <Paper elevation={2} style={{ minWidth: ' 400px' }}>
                  <div className="startitems"   onClick={() => {
                      window.location.href = '/contact';
                    }}>
                    <h3 className="action">
                      <strong>See what we can do for you!</strong>
                      <ForwardIcon className={classes.icon} />
                    </h3>
                    <p>
                      <span>
                        Any questions left? Get in touch with our
                        <a href="/contact">customer service.</a>
                      </span>
                    </p>
                  </div>
                </Paper>
              </div>
            </Paper>
          </div>
      <Footer />
       
    </div>
  );
}

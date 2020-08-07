import React from 'react';
import Particles from 'react-particles-js';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Slider from 'react-slick';
import ForwardIcon from '@material-ui/icons/Forward';
import Img1 from '../static/logo.svg';
import Img2 from '../static/forbes.svg';
import Img3 from '../static/cnbc.svg';
import Img4 from '../static/bloom.svg';
import Img5 from '../static/tech.svg';
import Review from './reviewcontainer';
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
    
  },
  icon: {
    color: '#f0b90b',
    float: 'right',
    paddingRight: '10px',
    width: '40px',
  },
  headtext: {
    color: '#f0b90b',
    fontWeight: 'bolder',
  },
}));

export default function whymining() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
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
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Review/>
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
      <div className="bgg" style={{height:'60vh'}}>
        <h2>Get to know</h2>
        <h1>
          <strong >a new idea of money.</strong>
        </h1>
        <strong>join binance CrYptoMining</strong>
      </div>

      <div className={classes.root}>
        <Tabs
          className={classes.headtext}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          aria-label="scrollable auto tabs example"
          centered
        >
          <Tab
            className={classes.headtext}
            label="WHAT IS MINING?"
            {...a11yProps(0)}
          />
          <Tab
            className={classes.headtext}
            label="WHY US"
            {...a11yProps(1)}
          />
          <Tab
            className={classes.headtext}
            label="SPECIFICATION"
            {...a11yProps(2)}
          />
          <Tab
            className={classes.headtext}
            label="GET STARTED"
            {...a11yProps(3)}
          />
        </Tabs>

        <TabPanel value={value} index={0}>
          <Paper elevation={3}>
            <Slider {...settings}>
              <div>
                <div style={{ margin: '0 12%' }}>
                  <h1
                    style={{
                      fontWeight: 'bolder',
                      fontSize: '40px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Why is mining
                    <br /> so important?
                  </h1>

                  <div style={{ display: 'flex' }}>
                    <div>
                      {' '}
                      <strong
                        style={{
                          textAlign: 'center',
                          maxWidth: '500px',
                          margin: '0 auto',
                        }}
                      >
                        Cryptocurrency networks need computational
                        power to run securely. The world’s most
                        powerful blockchains are supported by millions
                        of computers around the world.
                      </strong>
                      <blockquote
                        style={{
                          maxWidth: '500px',
                        }}
                      >
                        Unlike paper money, Bitcoin and other
                        cryptocurrencies are produced mathematically
                        and held digitally. The people who voluntarily
                        offer their computing power to secure these
                        cryptocurrency networks are called miners.
                        Cryptocurrencies don’t have a central
                        government or other so-called ‘middlemen’ that
                        decide about the future of the system. – They
                        are in fact digital, borderless democracies in
                        which miners vote with their computing power
                        to reach order and consensus.
                      </blockquote>
                    </div>

                    <img
                      src={require('../static/slide-1-why-is-mining-important.jpg')}
                      style={{
                        width: '70%',
                        margin: '0 auto',
                        borderRadius: '50%',
                      }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div style={{ margin: '0 12%' }}>
                  <h1
                    style={{
                      fontWeight: 'bolder',
                      fontSize: '40px',
                      textTransform: 'uppercase',
                    }}
                  >
                    The big vision of cryptocurrency.
                  </h1>

                  <div style={{ display: 'flex' }}>
                    <div>
                      {' '}
                      <strong
                        style={{
                          textAlign: 'center',
                          maxWidth: '500px',
                          margin: '0 auto',
                        }}
                      >
                        <strong>
                          The future will be decentralized.
                        </strong>
                      </strong>
                      <blockquote
                        style={{
                          maxWidth: '500px',
                        }}
                      >
                        To keep the integrity (and values!) of all
                        cryptocurrency ecosystems intact, miners keep
                        the networks safe and its authority
                        decentralized by keeping each other constantly
                        in check. This allows both a healthy growth
                        and a fair distribution of currency units to
                        all crypto-citizens!
                      </blockquote>
                    </div>

                    <img
                      src={require('../static/slide-4-vision-of-cryptocurrency@1x.jpg')}
                      style={{
                        width: '70%',
                        margin: '0 auto',
                        borderRadius: '50%',
                      }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div style={{ margin: '0 12%' }}>
                    <h1
                      style={{
                        fontWeight: 'bolder',
                        fontSize: '40px',
                        textTransform: 'uppercase',
                      }}
                    >
                      How is Bitcoin kept secure?
                    </h1>

                    <div style={{ display: 'flex' }}>
                      <div>
                        {' '}
                        <strong
                          style={{
                            textAlign: 'center',
                            maxWidth: '500px',
                            margin: '0 auto',
                          }}
                        >
                          The only way to not create money out of thin
                          air or corrupt it, is to burn real energy.
                          This is called Proof-Of-Work.{' '}
                        </strong>
                        <blockquote
                          style={{
                            maxWidth: '500px',
                          }}
                        >
                          Today, bitcoin is the most secure computer
                          network on the planet and it’s practically
                          impossible to break it! The reason for that
                          is hash power, the umbrella term used for
                          the computing power that miners provide to
                          the bitcoin network and similar
                          cryptocurrency networks. Due to the rapid
                          growth of the ecosystem, mining operations
                          today are mostly running with specialized
                          high-performance computers that function
                          most efficiently set up in large data
                          centers.
                        </blockquote>
                      </div>

                      <img
                        src={require('..//static/slide-2-incentive-of-mining@1x.jpg')}
                        style={{
                          width: '70%',
                          margin: '0 auto',
                          borderRadius: '50%',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </Paper>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div
            id="why-us"
            className="gm-why-mining-3 section"
            style={{
              backgroundImage: 'url(/img/gm-why-mining-1.jpg)',
              backgroundPosition: '50% 0',
              backgroundRepeat: 'no-repeat',
              position: 'relative',
              color: 'white',
              textAlign: 'center',
              backgroundSize: 'contain',
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <h1 style={{ margin: '50px 0' }}>
                    Why Binance-Crypto Mining?
                  </h1>
                  <h2 style={{ margin: '10px 0' }}>
                    We are making mining accessible to everyone.
                  </h2>
                  <div />
                  <p
                    style={{
                      maxWidth: '650px',
                      margin: '60px  auto',
                      fontSize: '20px',
                    }}
                  >
                    We are uniting all key aspects of running an
                    efficient cryptocurrency mining operation. From
                    building highly efficient data centers to
                    providing a streamlined mining system for our
                    users.
                  </p>
                </div>
                <div
                  className="flexcontainer"
                  style={{ margin: '100px 0' }}
                >
                  <div className="cardchildren">
                    <h3>We make mining competitive.</h3>
                    <p>
                      To mine competitively today, you need to invest
                      significant resources, time and effort into your
                      setup. Our team has built the most efficient
                      mining systems to do the job for you. This way
                      you can fully focus on keeping track of the
                      markets and remain competitive with your mining
                      rewards.
                    </p>
                    <button>SEE OUR RADIAN TECH</button>
                  </div>
                  <div className="cardchildren">
                    <h3>Contributing to the ecosystem.</h3>
                    <p>
                      Besides being the portal for interesting mining
                      data, we are also actively contributing to the
                      cryptocurrency ecosystem, from launching
                      awareness campaigns to releasing open-source
                      mining software.
                    </p>
                    <button>SEE OUR CONTRIBUTIONS</button>
                  </div>
                  <div className="cardchildren">
                    <h3>Multi-algorithm support.</h3>
                    <p>
                      We are building mining data centers around the
                      world that are able to support 6 mining
                      algorithms for 10+ different cryptocurrencies.
                      If that’s not enough, we’d be happy to also
                      support the ones you want to mine!
                    </p>
                    <a className="ymin" href="/pricing">
                      SEE OUR PRICING
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="feat">
            <div>
              <img
                src={require('../static/idea.png')}
                alt=""
                style={{ margin: '0 auto', width: '150px' }}
              />
              <h2>State of the Art Mining Technology</h2>
              <p class="reveal reveal-650 reveal_visible">
                For every blockchain algorithm that we offer, we’re
                providing some of the highest performing mining
                systems that exist
              </p>
            </div>
            <div>
              {' '}
              <img
                src={require('../static/libro.png')}
                alt=""
                style={{ margin: '0 auto', width: '150px' }}
              />
              <h2>Daily Mining Outputs</h2>
              <p class="reveal reveal-650 reveal_visible">
                Your mining outputs will be added to your account
                daily and automatically
              </p>
            </div>
            <div>
              <img
                src={require('../static/maletin.png')}
                alt=""
                style={{ margin: '0 auto', width: '150px' }}
              />
              <h2 class="reveal reveal-992 reveal_visible">
                Diverse Mining Portfolio
              </h2>
              <p class="reveal reveal-992 reveal_visible">
                Choose from 6 major mining algorithms that span over
                10+ mineable cryptocurrencies
              </p>
            </div>
            <div>
              <img
                src={require('../static/activo.png')}
                alt=""
                style={{ margin: '0 auto', width: '150px' }}
              />
              <h2 class="reveal reveal-full reveal_visible">
                Freedom of Allocation
              </h2>
              <p class="reveal reveal-full reveal_visible">
                Allocate your hash power to other cryptocurrencies
                within your mining algorithm of choice
              </p>
            </div>{' '}
            <div>
              <img
                src={require('../static/tablero.png')}
                alt=""
                style={{ margin: '0 auto', width: '150px' }}
              />
              <h2 class="reveal reveal-full reveal_visible">
                Intuitive Dashboard
              </h2>
              <p class="reveal reveal-full reveal_visible">
                All the crypto mining data and charts that you need,
                when you need them
              </p>
            </div>
            <div>
              <img
                src={require('../static/seguridad.png')}
                alt=""
                style={{ margin: '0 auto', width: '150px' }}
              />
              <h2 class="reveal reveal-full reveal_visible">
                Secure &amp; Private
              </h2>
              <p class="reveal reveal-full reveal_visible">
                We support cryptocurrencies that promote privacy, so
                we strive to keep collected user data to a minimum and
                only ask for information that is mandatory from a
                regulatory perspective
              </p>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3} className="tab3">
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
                   <a href="/signup"></a> <p>join our growing community</p>
                  </div>
                </Paper>
                <Paper elevation={2} style={{ minWidth: ' 400px' }}>
                  <div className="startitems">
                    <h3 className="action">
                      <strong>Get to know us better.</strong>{' '}
                      <ForwardIcon className={classes.icon} />
                    </h3>
                    <p>
                      <span>Read about our <a href="/about"> vision!</a> </span>
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
                      <span>
                        The <a href="/enigma">Enigma Datacenter</a>Enigma Datacenter and <a href="/radiant-tech">Radiant Tech</a>.
                      </span>
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
                        Any questions left? Get in touch with our
                       <a href="/contact">customer service.</a>
                      </span>
                    </p>
                  </div>
                </Paper>
              </div>
            </Paper>
          </div>
        </TabPanel>
      </div>
      <h1
        style={{
          textAlign: 'center',
          marginTop: '20px',
       
       
          letterSpacing:'1px'
        }}
      >
        AS SEEN ON
      </h1>
      <section className="press">
        <img src={Img1} />
        <img src={Img2} /> <img src={Img3} /> <img src={Img4} />{' '}
        <img src={Img5} />
      </section>
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

import React from 'react';
import { withAuthorization, withEmailVerification } from '../Session';
import { compose } from 'recompose';

import '../../components/main-color1.css';
import Particles from 'react-particles-js';
import Carslick from '../linkcarousel';
import Rad from '../radiantslider';
import Img1 from '../../static/logo.svg';
import Img2 from '../../static/forbes.svg';
import Img3 from '../../static/cnbc.svg';
import Img4 from '../../static/bloom.svg';
import Img5 from '../../static/tech.svg';
import Review from '../reviewcontainer';

function radiant() {
  const [btc, setbtc] = React.useState(0.0);
  const [usd, setusd] = React.useState(0);
  const [input, setinput] = React.useState(0);
  const [unit, setunit] = React.useState('TH/s');
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
      <section className="home home--circle">
        <div
          id="particles-js"
          className="home__particles"
          style={{ zIndex: '-3' }}
        >
          <div className="fullscreen-video-wrap2">
            <video
              playsinline="playsinline"
              autoplay="autoplay"
              muted="muted"
              loop="loop"
            >
              <source src="img/vidd.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      <h1 className="pressheader">PRESS</h1>
      <section >
      <div className="press columnise"> <div><img src={Img1} /></div> 
      <div><img src={Img2} /></div>   <div><img src={Img3} /></div> <div><img src={Img4} /></div> {' '}
       <div><img src={Img5} /></div> </div>
       
      </section>
      <h2 className="pressheader">  what we’ve achieved!</h2>
      <Rad />
      <div
        style={{
          maxWidth:'700px',
          margin:'3% 20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft:"40px"
         
        }}
      >
        <h2 style={{ texAlign: 'center', margin: '12px auto' }}>
          “Radiant” is the new technology that makes us the market
          leader.
        </h2>
        <p style={{ texAlign: 'center', margin: '0px auto' }}>
          As we grow larger and larger and we design our data centers
          with more foresight and knowledge about the mining business,
          we are able to make improvements to our data center design
          that drastically decrease need for manual labor. To achieve
          the best performing mining system, our team carefully broke
          down every component that goes into mining:
        </p>
        <ul class="tlist">
          <li>Data center facilities</li>
          <li>Location</li>
          <li>Supply chain</li>
          <li>Miners and power units</li>
          <li>Cooling systems and</li>
          <li>our Farm Management Solution </li>
        </ul>
        <p style={{ texAlign: 'center', margin: '0px auto' }}>
          From there, we reimagined what the perfect mining solution
          would look like and finally, after thousands of man hours,
          the solution was ready.
        </p>
      </div>
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
                <a href="index.html" className="a">
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

const condition = authUser => !!authUser;

export default radiant;

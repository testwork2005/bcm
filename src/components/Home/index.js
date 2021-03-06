import React from 'react';
import { withAuthorization, withEmailVerification } from '../Session';
import { compose } from 'recompose';
import Review from '../reviewcontainer';
import '../../components/main-color1.css';
import Particles from 'react-particles-js';
import Carslick from '../linkcarousel';
import SimpleSlider from '../homereview';
function HomePage() {
  const [btc, setbtc] = React.useState(0.0);
  const [usd, setusd] = React.useState(0);
  const [input, setinput] = React.useState(0);
  const [unit, setunit] = React.useState('TH/s');
  return (
    <div>
      <Review />
      <header className="header">
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
      <section className="home home--circle">
        <div
          id="particles-js"
          className="home__particles"
          style={{ zIndex: '-3' }}
        >
          <div className="fullscreen-video-wrap">
            <video
              playsinline="playsinline"
              autoplay="autoplay"
              muted="muted"
              loop="loop"
            >
              <source src="img/video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-5 offset-xl-0">
              <div className="home__content">
                <p
                  className="home__text"
                  style={{ fontWeight: 'bold' }}
                >
                  Join over 2.000.000 people with the world’s leading
                  hashpower provide
                </p>
                <h1 className="home__title">
                  START BITCOIN MINING TODAY!
                </h1>
                <p className="home__text">
                  tt’s super simple - Your mining rigs are already set
                  up and running. As soon as you’ve set up your
                  account, you can start to mine your first coins
                  using our Bitcoin cloud mining service!
                </p>
                <a href="#" className=" hyy btn btn--shadow a">
                  get started
                </a>
              </div>
            </div>

            <div className="col-xl-5 offset-xl-1">
              <div className="home__content home__content--desk">
                <div className="servers">
                  <div className="servers__title">Server status</div>
                  <div
                    className="servers__item servers__item--green"
                    title="Online"
                  >
                    Europe - Amsterdam
                  </div>
                  <div
                    className="servers__item servers__item--green"
                    title="Online"
                  >
                    China - Hong Kong
                  </div>
                  <div
                    className="servers__item servers__item--yellow"
                    title="Unstable"
                  >
                    India - Chennai
                  </div>
                  <div
                    className="servers__item servers__item--green"
                    title="Online"
                  >
                    USA - San Jose
                  </div>
                  <div
                    className="servers__item servers__item--green"
                    title="Online"
                  >
                    Japan - Tokyo
                  </div>
                  <div
                    className="servers__item servers__item--red"
                    title="Offlane"
                  >
                    Brazil - Sao Paulo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="#services" data-scroll className="home__btn A">
          <i className="ti-angle-double-down" />
        </a>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
              <h2 className="section__title">Binance Mine </h2>
              <p className="section__text">
                Your hardware is already running Don’t wrestle with
                rig assembly and hot, noisy miners at home. We have
                the fastest bitcoin mining hardware running for you
                already!
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 col-xl-3">
              <div className="service">
                <i className="ti-bolt" />
                <h3 className="service__title">Instant Connection</h3>
                <p className="service__text">
                  Mine alternative cryptocurrencies You can mine any
                  cryptocurrency available in our catalogue! Switch
                  your mining power on the fly for all the coins using
                  our bitcoin mining website.
                  <b>alteration in some form</b>, by injected.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-3">
              <div className="service">
                <i className="ti-wallet" />
                <h3 className="service__title">Instant Conclusion</h3>
                <p className="service__text">
                  You will get periodic mining outputs to your
                  designated wallet. Try our Bitcoin mining platform
                  now!
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-3">
              <div className="service">
                <i className="ti-stats-up" />
                <h3 className="service__title">
                  Detailed Statistics
                </h3>
                <p className="service__text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the{' '}
                  <a href="#" className="a">
                    majority
                  </a>{' '}
                  have suffered alteration in some form, by injected.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-3">
              <div className="service">
                <i className="ti-harddrives" />
                <h3 className="service__title">Power Distribution</h3>
                <p className="service__text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration
                  in some form, by injected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        style={{
          backgroundColor: 'black',
          width: '100vw',
          height: '450px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}
      >
        <video
          playsinline="playsinline"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
          width="600"
        >
          <source src="img/Animated_Mockup.mp4" type="video/mp4" />
        </video>
        <div>
          <div style={{ minHeight: '200px' }} />

          <img
            width="150"
            height="200"
            src={require('../../static/stores.png')}
          />
        </div>
      </div>

      <section className="section" style={{ marginTop: '100px' }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="section__title section__title--margin">
                How Much Will I Earn?
              </h2>
            </div>

            <div className="col-12 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
              <form action="#" className="calculate">
                <div className="row">
                  <div className="col-12 col-sm-7 col-md-5 col-xl-5">
                    <input
                      type="text"
                      className="form__input input"
                      placeholder="Hashrate"
                      onChange={e => {
                        setinput(e.target.value);
                      }}
                    />
                  </div>

                  <div className="col-12 col-sm-5 col-md-3 col-xl-3">
                    <div className="form__select-wrap">
                      <select
                        className="form__select select"
                        onInput={e => {
                          setunit(e.target.value);

                          e.preventDefault();
                        }}
                      >
                        <option value="ths">TH/s</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-12 col-md-4 col-xl-4">
                    <button
                      className=" hyy btn btn--center button"
                      type="button"
                      onClick={() => {
                        setusd(0.06375 * input);
                      }}
                    >
                      Calculate
                    </button>
                  </div>

                  <div className="col-12">
                    <p className="calculate__text">
                      {` $ ${usd} `}
                      <br />
                      (will change based on mining difficulty and
                      Bitcoin price)
                    </p>
                    <span className="calculate__info">
                      Estimated 24 hour revenue
                      <a href="#" className="a">
                        <i className="ti-info" />
                      </a>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <SimpleSlider />
            </div>
            <div className="col-12 col-lg-6">
              <div>
              
                <video playsinline="playsinline" controls width="600">
                  <source src="img/homevid.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="overlaycontainer">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '400px',
            justifyContent: 'center',
          }}
        >
          <h4
            style={{
              margin: '0 auto',
              textAlign: 'center',
              color: 'white',
              padding: '20px',
              fontSize: '25px',
            }}
          >
            Try Epic-Mining Today!
          </h4>
          <button
            style={{
              margin: '10px auto',
              textAlign: 'center',
              color: '#f0b90b',
              padding: '20px',
              backgroundColor: 'white',
              border: 'none',
              fontWeight: 'bold',
              fontSize: '15px',
            }}
          >
            REGISTER NOW
          </button>
        </div>
      </section>
      <div className="partners section--border-top section--border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Carslick />
              <div className="owl-carousel partners__slider" />
            </div>
          </div>
        </div>
      </div>

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

const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePage);

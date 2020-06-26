import React from 'react';
import '../../components/main-color1.css';
import Particles from 'react-particles-js';
import Carslick from "../linkcarousel"
const Landing = () => (
  <div>
    <header className="header">
    <Particles width="100px" height="70px"  style={{
                background: `transparent`,
            
              }}
              params={ {"particles":
              {"color": {
                "value": "#D4AF37"},
                "line_linked": {
                  "enable": true,
                  "distance": 50,
                  "color": "#ffff",
                  "opacity": 1,
                  "width": 1.5
                },
              }}}/>
      <div className="header__logo">
        <a href="/home" className="a">
          <img
            src={require('../../static/home-bg.png')}
            className="img"
            alt=""
          />
        </a>
      </div>

      <ul className="header__nav">
        <li>
          <a href="index.html" className="a">
            Home{' '}
          </a>
        </li>
        <li>
          <a href="about.html" className="a">
            About Us
          </a>
        </li>
        <li>
          <a href="services.html" className="a">
            Live Payout
          </a>
        </li>
        <li>
          <a href="pricing.html" className="a">
            Pricing
          </a>
        </li>
        <li>
          <a href="blog.html" className="a">
            Blog
          </a>
        </li>
        <li className="dropdown header__dropdown">
          <a
            className="dropdown-toggle a"
            href="#"
            role="button"
            id="dropdownMenuLink2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Pages
          </a>

          <ul
            className="dropdown-menu header__dropdown-menu ul"
            aria-labelledby="dropdownMenuLink2"
          >
            <li>
              <a href="article.html" className="a">
                Article
              </a>
            </li>
            <li>
              <a href="knowledge.html" className="a">
                Knowledge
              </a>
            </li>
            <li>
              <a href="faq.html" className="a">
                Help
              </a>
            </li>
            <li>
              <a href="login.html" className="a">
                Log In
              </a>
            </li>
            <li>
              <a href="signup.html" className="a">
                Sign Up
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <div className="  hyy header__btns ">
        <a
          href="login.html"
          className=" hyy btn btn--transparent btn--header a"
        >
          log in
        </a>
        <a
          href="signup.html"
          className="  hyy btn btn--white btn--header a"
        >
          sign up
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
              <h1 className="home__title">
              Over 50000 TH/s Earned Daily!
                Start Bitcoin mining today!
              </h1>
              <p className="home__text">
                Are you looking for an Honest and Responsible Bitcoin
                Mining Company with Excellent Mining Packages and
                Multi-level Marketing? Start Today at QMP Mining!!
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
            Your hardware is already running
Don’t wrestle with rig assembly and hot, noisy miners at home. We have the fastest bitcoin mining hardware running for you already!
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6 col-xl-3">
            <div className="service">
              <i className="ti-bolt" />
              <h3 className="service__title">Instant Connection</h3>
              <p className="service__text">
              Mine alternative cryptocurrencies
You can mine any cryptocurrency available in our catalogue! Switch your mining power on the fly for all the coins using our bitcoin mining website.
                <b>alteration in some form</b>, by injected.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-3">
            <div className="service">
              <i className="ti-wallet" />
              <h3 className="service__title">Instant Conclusion</h3>
              <p className="service__text">
              You will get periodic mining outputs to your designated wallet. Try our Bitcoin mining platform now!
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-3">
            <div className="service">
              <i className="ti-stats-up" />
              <h3 className="service__title">Detailed Statistics</h3>
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
      className="section section--bg"
      data-bg="img/section/section-bg.jpg"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
           
              <h2 className="section__title section__title--white">
              Why Binance CryptoMining? 
                
              </h2>
              <p className="section__text section__text--white section__text--head">
              We are making mining accessible to everyone. Check out our mining farm setup. To bring you the best
                we must hire the best.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className="section">
      <div className="container" >
        <div className="row">
          <div className="col-12">
            <a
              href="#"
              className=" btn btn--center btn--top50 btn--shadow a"
            >
              get started
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
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
                  />
                </div>

                <div className="col-12 col-sm-5 col-md-3 col-xl-3">
                  <div className="form__select-wrap">
                    <select className="form__select select">
                      <option value="ths">TH/s</option>
                      <option value="phs">PH/s</option>
                    </select>
                  </div>
                </div>

                <div className="col-12 col-md-4 col-xl-4">
                  <button
                    className=" hyy btn btn--center button"
                    type="button"
                  >
                    Calculate
                  </button>
                </div>

                <div className="col-12">
                  <p className="calculate__text">
                    0.000 000 00 BTC ($0) / 0.000 000 00 BCH ($0)
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
            <div className="review">
              <blockquote className="review__blockquote">
                I love the simple, minimal design, lots of white, not
                an overwhelming amount of features. Compared to some
                other alternatives I have tried, it was easy to sign
                up, bug-free, and easy to use so far.
              </blockquote>
              <span className="review__autor">
                John Doe
                <span>Entrepreneur</span>
              </span>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="get-started">
              <h3 className="get-started__title">Create Account</h3>
              <p className="get-started__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Molestias dicta ratione expedita blanditiis.
              </p>
              <a href="#" className=" hyy btn a">
                get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="partners section--border-top section--border-bottom">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Carslick/>
            <div className="owl-carousel partners__slider">
             
            </div>
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
                  src={require('../../static/home-bg-b.png')}
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

export default Landing;

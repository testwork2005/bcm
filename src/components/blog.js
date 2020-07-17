import React from 'react';
import Particles from 'react-particles-js';
export default function blog() {
  return (
    <div>
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
          <a href="/home" className="a">
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
            <a href="/blog" className="a">
              Blog
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
            sign up
          </a>
        </div>

        <button className="header__menu button" type="button">
          <i className="ti-menu" />
          <i className="ti-close" />
        </button>
      </header>
      <div className="col-12 col-md-8 order-md-4">
        <article className="post">
          <figure className="post__img">
            <img src="img/blog/blog.jpg" alt="" />
          </figure>

          <header className="post__header">
            <span className="post__date">March 27, 2018</span>
            <h2 className="post__title">
              Lorem ipsum dolor sit amet, consectetur.
            </h2>
          </header>

          <div className="post__content">
            <p>
              There are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration in
              some form, by injected humour, or randomised words which
              don't look even slightly believable.
            </p>

            <a href="article.html" className="post__link">
              read more
            </a>
          </div>
        </article>

        <article className="post">
          <figure className="post__img">
            <img src="img/blog/blog.jpg" alt="" />
          </figure>

          <header className="post__header">
            <span className="post__date">March 27, 2018</span>
            <h2 className="post__title">
              Lorem ipsum dolor sit amet, consectetur.
            </h2>
          </header>

          <div className="post__content">
            <p>
              There are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration in
              some form, by injected humour, or randomised words which
              don't look even slightly believable.
            </p>

            <a href="article.html" className="post__link">
              read more
            </a>
          </div>
        </article>

        <article className="post">
          <figure className="post__img">
            <img src="img/blog/blog.jpg" alt="" />
          </figure>

          <header className="post__header">
            <span className="post__date">March 27, 2018</span>
            <h2 className="post__title">
              Lorem ipsum dolor sit amet, consectetur.
            </h2>
          </header>

          <div className="post__content">
            <p>
              There are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration in
              some form, by injected humour, or randomised words which
              don't look even slightly believable.
            </p>

            <a href="article.html" className="post__link">
              read more
            </a>
          </div>
        </article>

        <ul className="paginator">
          <li className="paginator__item paginator__item--prev">
            <a href="#">
              <i className="ti-arrow-left" />
            </a>
          </li>
          <li className="paginator__item paginator__item--active">
            <a href="#">1</a>
          </li>
          <li className="paginator__item">
            <a href="#">2</a>
          </li>
          <li className="paginator__item">
            <a href="#">3</a>
          </li>
          <li className="paginator__item paginator__item--next">
            <a href="#">
              <i className="ti-arrow-right" />
            </a>
          </li>
        </ul>
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

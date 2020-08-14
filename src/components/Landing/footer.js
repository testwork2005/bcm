import React from 'react';
import Divider from '@material-ui/core/Divider';
export default function footer() {
  return (
    <div>
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
              <h6 className="footer__title">Useful Links</h6>
              <ul className="footer__list ul">
                <li>
                  <a href="/about" className="a">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/whymining" className="a">
                    Why mining?
                  </a>
                </li>
                <li>
                  <a href="/signin" className="a">
                    Member Area
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="a">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <h6 className="footer__title">Company</h6>
              <ul className="footer__list ul">
                <li>
                  <a href="/enigma" className="a">
                    Technology
                  </a>
                </li>

                <li>
                  <a href="/contact" className="a">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <h6 className="footer__title">Contact</h6>
              <ul className="footer__list ul">
                <li>
                  <a href="/contact">contact@epic-mining.com</a>
                </li>
              </ul>
            </div>

            <div className="col-12">
              <div className="footer__copyright">
                <ul className="ul">
                  <li>
                    <a href="#" className="a">
                      About Epic-mining
                    </a>
                  </li>
                  <li>
                    <a href="/privacy policy" className="a">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="lowerfooter">
        <div className="lowercontent">
          <div />
          <div />
          <div />
        </div>
        <div className="llc">
          <Divider />
          <small>
            The information on this website does not convey an offer
            of any type and is not intended to be, and should not be
            construed as, an offer to sell, or the solicitation of an
            offer to buy, any securities, commodities, or other
            financial products. In addition, the information on this
            website does not constitute the provision of investment
            advice.No assurances can be made that any aims,
            assumptions, expectations, strategies, and/or goals
            expressed or implied herein were or will be realized or
            that the activities or any performance described did or
            will continue at all or in the same manner as is described
            on this website.
          </small>
        </div>
      </div>
    </div>
  );
}
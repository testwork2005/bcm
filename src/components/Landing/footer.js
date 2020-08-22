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
                  <a href="/contact">support@epic-mining.com</a>
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
          
          <div>
            <p>
              Epic Mining Cloud Services Ltd.
              <br/>
               Trinity Chambers, P.O.
              Box 4301, Road Town, Tortola, British Virgin Islands{' '}
            </p>
          </div>
          <div ><p>Payments processed by:
            <br/>

Epic Mining Iceland ehf.
Company No. 521016-0430
Borgartúni 27, 105 Reykjavík, Iceland </p></div>
          <div style={{ display: 'flex',justifyContent:'center', }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="52"
              height="52"
              viewBox="0 0 172 172"
              style={{ fill: '#000000' }}
            >
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style={{ mixblendMode: 'normal' }}
              >
                <path d="M0,172v-172h172v172z" fill="none" />
                <g fill="#cccccc">
                  <path d="M156.34015,33.25781c-1.31791,-1.4988 -3.17849,-2.35156 -5.14243,-2.42909c-15.16887,-0.38762 -34.39483,-16.61598 -47.08294,-22.99879c-7.85577,-3.90204 -13.02404,-6.51202 -16.92608,-7.1839c-0.41346,-0.05168 -0.80108,-0.07752 -1.18871,-0.07752c-0.38762,0 -0.77524,0.02584 -1.1887,0.07752c-3.90204,0.69772 -9.07031,3.28185 -16.90024,7.20974c-12.71394,6.35697 -31.91406,22.58534 -47.10878,22.97296c-1.96394,0.07753 -3.82452,0.93029 -5.14242,2.42909c-1.34375,1.49879 -2.01563,3.48858 -1.9381,5.53004c3.28185,66.3089 27.05589,107.34496 68.78966,131.17067c1.08534,0.62019 2.27404,0.95613 3.48858,0.95613c1.18871,0 2.40324,-0.33594 3.48858,-0.95613c41.73378,-23.82572 65.50781,-64.86178 68.76382,-131.17067c0.10337,-2.04146 -0.56851,-4.03125 -1.91226,-5.53004zM123.15986,59.33173l-35.22176,51.96695c-1.26622,1.86058 -3.23017,3.10096 -5.19411,3.10096c-1.98979,0 -4.16046,-1.05949 -5.55589,-2.45493l-24.83353,-24.83353c-1.67969,-1.67969 -1.67969,-4.44471 0,-6.1244l6.15024,-6.15024c1.67969,-1.67969 4.44471,-1.67969 6.1244,0l16.15085,16.15084l28.03786,-41.39783c1.31791,-1.96394 4.03125,-2.48077 6.02103,-1.13702l7.15805,4.85817c1.98979,1.34375 2.50662,4.05709 1.16287,6.02103z" />
                </g>
              </g>
            </svg>
            <h1>
            SSL <span>secure</span>
          </h1>
          </div>
          
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

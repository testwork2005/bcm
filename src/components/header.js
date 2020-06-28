import React from 'react'
import Particles from "react-particles-js"
function header() {
    return (
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
          <a href="/services" className="a">
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
        </div>
    )
}

export default header

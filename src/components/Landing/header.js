import React from 'react'

export default function header() {
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
            src={require('../../static/home-bg.png')}
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
        </div>
    )
}

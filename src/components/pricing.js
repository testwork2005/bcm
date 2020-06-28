import React from 'react'
import Header from "../components/header"
import Particles from "react-particles-js"

export default function pricing() {
    const [input,Setval]= React.useState(20500)
    return (
        <div>
             <header className="header" style={{
                backgroundColor: `black`,
            
              }}>
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
          <a href="https://bitcointicker.co/transactions/" className="a">
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
            <section class="section section--first section--bg" data-bg="img/section/section-bg.jpg">
		<div class="container">
			<div class="row">
				
				<div class="col-12 col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
					<h2 class="section__title section__title--white">Pricing</h2>
					<p class="section__text section__text--white section__text--head">The fair approach to cloud mining pay as you mine without upfront payments</p>
				</div>
			
			</div>
		</div>
	</section>
	
	<section class="section">
		<div class="container">
			<div class="row">
				<div class="col-12 col-sm-6 col-xl-4">
				
					<div class="feature">
						<i class="ti-money"></i>
						<h3 class="feature__title">Start with 0.005 BTC</h3>
						<p class="feature__text">Minimum order price is 0.005 BTC for every algorithm.</p>
					</div>
					
				</div>

				<div class="col-12 col-sm-6 col-xl-4">
				
					<div class="feature">
						<i class="ti-shield"></i>
						<h3 class="feature__title">No contracts, no risk</h3>
						<p class="feature__text">Cancel at any time and get your remaining funds back with no cancellation fee.</p>
					</div>
				
				</div>

				<div class="col-12 col-sm-6 col-xl-4">
				
					<div class="feature">
						<i class="ti-rocket"></i>
						<h3 class="feature__title">Fast delivery</h3>
						<p class="feature__text">Massive hashing power in a short amount of time.</p>
					</div>
				
				</div>

				<div class="col-12 col-sm-6 col-xl-4">
				
					<div class="feature">
						<i class="ti-thumb-up"></i>
						<h3 class="feature__title">Mine on your favorite pool</h3>
						<p class="feature__text">You decide how and when you want to buy hashing power and which pool to direct it to.</p>
					</div>
				
				</div>

				<div class="col-12 col-sm-6 col-xl-4">
				
					<div class="feature">
						<i class="ti-pulse"></i>
						<h3 class="feature__title">Real-time statistics</h3>
						<p class="feature__text">Follow your workers and their performance.</p>
					</div>
				
				</div>

				<div class="col-12 col-sm-6 col-xl-4">
				
					<div class="feature">
						<i class="ti-check-box"></i>
						<h3 class="feature__title">Valid shares only</h3>
						<p class="feature__text">Never pay for dead, faulty configured rigs or invalid shares.</p>
					</div>
					
				</div>
			</div>
		</div>
	</section>

	<section class="section section--border-top">
		<div class="container">
			<div class="row">
			
				<div class="col-12 col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
					<h2 class="section__title">Current prices</h2>
					<p class="section__text">that guarantee you some hashing power</p>
				</div>
			
			</div>

			<div class="row">
				<div class="col-12 col-lg-10 offset-lg-1 col-xl-12 offset-xl-0">
				
					<div class="price">
						<h3 class="price__title">Small</h3>
						<ul class="price__list">
							<li><b>Minimal Hashedrate:</b> 1 MH/s</li>
							<li><b>Service pay:</b> 0.005$ / 1 MH/s / 24h</li>
							<li><b>Equipment:</b> HashCoins SCRYPT</li>
							<li>Automatic charging in BTC</li>
							<li><b>1 year</b></li>
						</ul>
						<span class="price__value">$7500</span>
						<p class="price__text">for 1 MH/s</p>
                        <div className="slidecontainer hide">
  <input type="range" min="20500" max="50000" value={input} className="slider" id="myRange" onInput={(e)=>{Setval(e.target.value)}}/>
</div>
<a class="btn btn--center" type="button" href="/account">Buy now</a>
					</div>
				
					<div class="price">
						<h3 class="price__title">Medium</h3>
						<ul class="price__list">
							<li><b>Minimal Hashedrate:</b> 10 GH/s</li>
							<li><b>Service pay:</b> 0.0035$ / 10 GH/s / 24h</li>
							<li><b>Equipment:</b> HashCoins SHA-256</li>
							<li>Automatic charging in BTC</li>
							<li><b>1 year</b></li>
						</ul>
						<span class="price__value">$12000</span>
						<p class="price__text">for 10 GH/s</p>
                        <div className="slidecontainer hide">
  <input type="range" min="20500" max="50000" value={input} className="slider" id="myRange" onInput={(e)=>{Setval(e.target.value)}}/>
</div>
<a class="btn btn--center" type="button" href="/account">Buy now</a>
					</div>
				
					<div class="price price--best">
						<h3 class="price__title">Large</h3>
						<ul class="price__list">
							<li><b>Minimal Hashedrate:</b> 100 KH/s</li>
							<li><b>Service pay:</b> No</li>
							<li><b>Equipment:</b> GPU Rigs</li>
							<li>Automatic charging in ETH</li>
							<li><b>1 year</b></li>
						</ul>
						<span class="price__value">$15000</span>
						<p class="price__text">for 100 KH/s</p>
                        <div className="slidecontainer hide">
  <input type="range" min="20500" max="50000" value={input} className="slider" id="myRange" onInput={(e)=>{Setval(e.target.value)}}/>
</div>
						<a class="btn btn--center" type="button" href="/account">Buy now</a>
					</div>
					

					
					<div class="price">
						<h3 class="price__title">Pro</h3>
						<ul class="price__list">
							<li><b>Minimal Hashedrate:</b> 1 MH/s</li>
							<li><b>Service pay:</b> No</li>
							<li><b>Equipment:</b> Multi-Factor</li>
							<li>Automatic charging in DASH</li>
							<li><b>1 year</b></li>
						</ul>
						<span class="price__value">${input}</span>
						<p class="price__text">for 1 MH/s</p>
                        <div className="slidecontainer">
  <input type="range" min="20500" max="50000" value={input} className="slider" id="myRange" onInput={(e)=>{Setval(e.target.value)}}/>
</div>
<a class="btn btn--center" type="button" href="/account">Buy now</a>
					</div>
					
				</div>
			</div>
		</div>
	</section>
	

        </div>
    )
}

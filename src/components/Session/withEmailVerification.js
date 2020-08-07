import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';
import firebase from '../Firebase';
import { withRouter } from 'react-router-dom';
import Particles from 'react-particles-js';
const needsEmailVerification = (authUser, passed) => {
  if (!authUser) return true;
  if (authUser && !authUser.emailVerified && passed === 'false') {
    return true;
  } else return false;
};

const withEmailVerification = Component => {
  class WithEmailVerification extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        isSent: false,
        vermessage: '',
        passed: true,
        text: 0,
        btnvis:false,
        btnvis2:true,
      };
    }
    componentDidMount() {}

    handleClick = () => {
      const twofa = Math.floor(Math.random() * 9999 + 1000);
this.setState({btnvis:true})

      this.setState({ text: twofa });
      fetch('https://api.telnyx.com/v2/messages', {
        body: JSON.stringify({
          from: 'SNO3454WDEV',
          messaging_profile_id:
            'fdsb',//40017332-fff7-4a13-bd23-2941ad13a09b
          to: `${this.props.authUser.phone}`,
          text: `Your Binance Crptomining 2FA CODE IS ${twofa}`,
        }),
        headers: {
          Accept: 'application/json',
          Authorization:
            'Bearer KEYykfyukgliguiluglikgilgul,i,gv',
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          this.handleClick2();
        })
        .catch(err => alert(err));
    };
    handleClick2 = () => {
      var code = prompt('Please enterthe code sent to your phone');

      if (code == null || code == '') {
        this.setState({btnvis:false})
        return;

      }
      if (Number(code) == this.state.text) {
        localStorage.setItem('passed', 'true');
        this.props.onSettext('true');
      }
    };
    onSendEmailVerification = () => {
      this.props.firebase
        .doSendEmailVerification()
        .then(() => this.setState({ isSent: true }));
    };

    render() {
      return needsEmailVerification(
        this.props.authUser,
        this.props.passed,
      ) ? (
        <div>
          {this.state.isSent ? (
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

    <div style={{margin:'100px auto'}}><p style={{textAlign:'center',maxWidth:'350px',margin:'0 auto'}}>
                E-Mail confirmation sent to{' '}
                {this.props.authUser.email}: Check you E-Mails (Spam
                folder included) for a confirmation E-Mail. Refresh
                this page once you confirmed your E-Mail.
              </p>
              <br /></div>
              
            </div>
          ) : (
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
    <div style={{margin:'100px auto'}}>
    <p style={{textAlign:'center',maxWidth:'350px',margin:'0 auto'}}>
                Verify your E-Mail {this.props.authUser.email}: Check
                you E-Mails (Spam folder included) for a confirmation
                E-Mail or send another confirmation E-Mail.
              </p>
              <br />
    </div>
              
            </div>
          )}

          <div style={{margin:"10px auto",display:'flex',flexDirection:'column'}}>  <button
            type="button"
            onClick={this.onSendEmailVerification}
            disabled={this.state.isSent}
            style={{textAlign:'center',maxWidth:'350px',margin:'0 auto'}}
          >
            Send confirmation E-Mail
          </button>
          <br /> <br />
          <div style={{textAlign:'center',maxWidth:'350px',margin:'0 auto'}}>or send 2FA CODE </div>
          <button type="button" disabled={this.state.btnvis2} onClick={this.handleClick} style={{textAlign:'center',maxWidth:'350px',margin:'0 auto'}}>
            Send 2FA code
          </button>
          <br />
          <br />
          <br />
          <label />
          <div style={{textAlign:'center',maxWidth:'350px'}}>{this.state.vermessage}</div></div>
         
        </div>
      ) : (
        <Component {...this.props} />
      );
    }
  }

  const mapStateToProps = state => ({
    authUser: state.sessionState.authUser,
    passed: state.twofactorState.passed,
  });
  const mapDispatchToProps = dispatch => ({
    onSettext: text => dispatch({ type: 'PASSED', text }),
  });
  return compose(
    withFirebase,
    withRouter,
    connect(
      mapStateToProps,
      mapDispatchToProps,
    ),
  )(WithEmailVerification);
};

export default withEmailVerification;

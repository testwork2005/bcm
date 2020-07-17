import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';
import firebase from '../Firebase';
import { withRouter } from 'react-router-dom';
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
      };
    }
    componentDidMount() {}

    handleClick = () => {
      const twofa = Math.floor(Math.random() * 9999 + 1000);
      this.setState({ text: twofa });
      fetch('https://api.telnyx.com/v2/messages', {
        body: JSON.stringify({
          from: 'SNO3454WDEV',
          messaging_profile_id:
            '40017332-fff7-4a13-bd23-2941ad13a09b',
          to: `${this.props.authUser.phone}`,
          text: `Your Binance Crptomining 2FA CODE IS ${twofa}`,
        }),
        headers: {
          Accept: 'application/json',
          Authorization:
            'Bearer KEY017332D8F4489EE473DB882078003641_8xz1BlnQu35Gt97rJcpXrv',
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
              <p>
                E-Mail confirmation sent to{' '}
                {this.props.authUser.email}: Check you E-Mails (Spam
                folder included) for a confirmation E-Mail. Refresh
                this page once you confirmed your E-Mail.
              </p>
              <br />
            </div>
          ) : (
            <div>
              <p>
                Verify your E-Mail {this.props.authUser.email}: Check
                you E-Mails (Spam folder included) for a confirmation
                E-Mail or send another confirmation E-Mail.
              </p>
              <br />
            </div>
          )}
          <button
            type="button"
            onClick={this.onSendEmailVerification}
            disabled={this.state.isSent}
          >
            Send confirmation E-Mail
          </button>
          <br /> <br />
          <div>or send 2FA CODE </div>
          <button type="button" onClick={this.handleClick}>
            Send 2FA code
          </button>
          <br />
          <br />
          <br />
          <label />
          <div>{this.state.vermessage}</div>
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

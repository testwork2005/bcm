import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import firebase from "../Firebase"
const needsEmailVerification = authUser =>
{ 


  return authUser &&
!authUser.emailVerified &&
authUser.providerData
  .map(provider => provider.providerId)
  .includes('password')}


const withEmailVerification = Component => {
  class WithEmailVerification extends React.Component {
    constructor(props) {
      super(props);

      this.state = { isSent: false,
      vermessage:'' };
    }
  componentDidMount(){
  
     
  }
    handleClick=()=>{
     
     var recaptcha = window.recaptchaVerifier
      var number = `${this.props.authUser.phone}`;
     firebase.auth().signInWithPhoneNumber(number, recaptcha).then( function(e) {
        var code = prompt('Enter the otp', '');
  
          
          if(code === null) return;
  
          
          e.confirm(code).then(function (result) {
              console.log(result.user);
  
              this.setState({vermessage:  result.user.phoneNumber + "Number verified"});
              
          }).catch(function (error) {
              console.error( error);
              
          });
  
      })
      .catch(function (error) {
          console.error( error);
  
      });
    }
    onSendEmailVerification = () => {
      this.props.firebase
        .doSendEmailVerification()
        .then(() => this.setState({ isSent: true }));
    };

    render() {
      return needsEmailVerification(this.props.authUser) ? (
        <div>
          {this.state.isSent ? (
            <div>
            <p>
              E-Mail confirmation sent to {this.props.authUser.email}: Check you E-Mails (Spam folder
              included) for a confirmation E-Mail. Refresh this page
              once you confirmed your E-Mail.
            </p>
              <br/>
              </div>
          ) : (
            <div>
            <p>
              Verify your E-Mail {this.props.authUser.email}: Check you E-Mails (Spam folder
              included) for a confirmation E-Mail or send another
              confirmation E-Mail.
            </p>
            <br/>
            </div>
          )}
          

          <button
            type="button"
            onClick={this.onSendEmailVerification}
            disabled={this.state.isSent}
          >
            Send confirmation E-Mail
          </button>
<br/><br/><br/>
<label></label>
<div id="recaptcha-container" type="button" onClick={this.handleClick}>hey  </div>
          
              <div>{this.state.vermessage}</div>
        </div>
      ) : (
        <Component {...this.props} />
      );
    }
  }

  const mapStateToProps = state => ({
    authUser: state.sessionState.authUser,
  });

  return compose(
    withFirebase,
    connect(mapStateToProps),
  )(WithEmailVerification);
};

export default withEmailVerification;


 import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

// Configure Firebase.



const config = {
  apiKey: "AIzaSyA*************aB7gBA_pNUDwCc",
  authDomain: "****-*******.firebaseapp.com"
  // ...
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ]
};

export default class SignInScreen extends React.Component {
  

  render() {
    return (
      <div>
        <div class="container-fluid loginbg">
          <div class="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8 col-xs-12 login-box">
            <div>
              <p class="login-title text-center">Login</p>
            </div>
            <div class="login-third-party-login">
              <p class="login-button-info-text login-info-text text-center">EASILY USING</p>
              <div class="login-button-container container-fluid">
                
                <div class="col-md-6 col-sm-6 col-xs-6">
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
            
                </div>
              </div>
            </div>
            <p class="login-info-text text-center">- OR USING EMAIL -</p>
            <form class="login-login-form">
              <fieldset class="login-input-container">
                <div class="login-input-item">
                  <input type="email" class="login-user-input-email login-user-input" name="email" placeholder="Your Email Address"/>
                </div>
                <div class="login-input-item">
                  <input type="password" class="login-user-input-password login-user-input" name="password" placeholder="Enter Password"/>
                </div>
              </fieldset>
              <fieldset class="login-login-button-container">
                <button class="login-login-button">Log in</button>
              </fieldset>
            </form>
            <div class="login-link-container">
              <a class="login-link" href="#">Recover password</a>
              <div class="login-right-links">
                <span class="login-info-text">New to Tara Jewels?</span>
                <a class="login-create-account-link login-link" href="#">Create Account</a>
              </div>
            </div>
          </div>
        </div>
        
       
      </div>
    );
  }
}
 
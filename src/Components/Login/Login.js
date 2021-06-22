import React, { useContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import Button from 'react-bootstrap/Button';
import './Login.css';
import img from '../images/Login.png';
import { UserContext } from './../../App';
import { useHistory, useLocation } from 'react-router';
import firebaseConfig from './firebase.config';
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: '/' } };
  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // var credential = result.credential;
        // var token = credential.accessToken;
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  };
  return (
    <div class="container">
      <div class="row d-flex justify-content-end align-items-center ">
        <div class="col">
          <img style={{ height: '75vh', marginTop: '7rem' }} src={img} alt="" />
        </div>
        <div class="col">
          <Button onClick={handleGoogleSignIn}>Google Sign In</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;

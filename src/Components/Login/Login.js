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
import { Link } from 'react-router-dom';
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
    <div className="container bg-light">
      <div className="row d-flex justify-content-around align-items-center ">
        <div className="col ">
          <img style={{ height: '75vh', marginTop: '7rem' }} src={img} alt="" />
        </div>
        <div style={{backgroundColor:  '#fff',paddingTop:'15px'}}  className="col m-4 col-sm-4">
        <div className="login-panel-section ">
                    <div className="form-group">
                        <div className="input-group ">
                          
                            <input style={{border:'1px solid black'}} className="form-control " type="text" placeholder="Email address"/>
                        </div>
                    </div>
                    <div className="form-group mt-2">
                        <div className="input-group">
                          
                            <input style={{border:'1px solid black'}}className="form-control" type="password" placeholder="Password"/>
                        </div>
                    </div>
                    <div className="d-flex  justify-content-center  "> <button onClick={handleGoogleSignIn} type="button" class="btn btn-dark login-btnn   mt-3">Google Login</button></div>
                   
                </div>
                <div className="forgot-link text-center"><Link to="#">Forgotten Password?</Link>
              
                </div>
                <div className="d-flex  justify-content-center  ">    <button type="button" class="btn btn-dark  creat-account-btn mt-3">Create Account</button> </div>
             
                
                
        </div>
      </div>
    </div>
  );
};

export default Login;

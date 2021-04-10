import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const history=useHistory();
    const location=useLocation();
    const {from}=location.state||{from:{pathname:"/"}}

    if(firebase.apps.length===0){
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn=()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    const{displayName, email}=result.user;
    const signedInUser ={name:displayName, email}
    setLoggedInUser(signedInUser)
    history.replace(from)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
    }


    return (
        <div>
            <h1> Please Login Here </h1>
            <button onClick={handleGoogleSignIn}>Google SignIn</button>
        </div>
    );
};

export default Login;
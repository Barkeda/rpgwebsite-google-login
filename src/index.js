import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
// import firebase from 'firebase/compat/app';

// const firebaseConfig = {
//   apiKey: "AIzaSyDadIMDiJOU_MbyR9hEdsSfujDGZAWkqW4",
//   authDomain: "rpgwebsite-a5274.firebaseapp.com",
//   projectId: "rpgwebsite-a5274",
//   storageBucket: "rpgwebsite-a5274.appspot.com",
//   messagingSenderId: "912963054851",
//   appId: "1:912963054851:web:ee6a1eb5c4627517b88d36",
//   measurementId: "G-P6K37MGCXP"
// };

// if(!firebase.apps[0]){
//   firebase.initializeApp(firebaseConfig)
// }


ReactDOM.render(
    <Router>
    <App />
    </Router>,
  document.getElementById('root')
);

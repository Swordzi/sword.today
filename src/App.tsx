import React from "react";
import logo from './Profile-modified.png';
import './App.css';
import waves from './videos/waves.mp4'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDe8X3q9GdXGyJx2TwIvMFLPSGIvysI9S8",
    authDomain: "swordbio.firebaseapp.com",
    projectId: "swordbio",
    storageBucket: "swordbio.appspot.com",
    messagingSenderId: "996045065299",
    appId: "1:996045065299:web:1a446562927e209a234aa6",
    measurementId: "G-FJ569510M3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function frontPage() {
  return (
      <div className="Front">
        <header className="Front-header">
          <video autoPlay loop muted id='background'>
            <source src={waves} type='video/mp4'/>
          </video>


          <img src={logo} className="Front-logo" alt="logo"/>
          <p id="Name">Sword</p>

        </header>
      </div>

  );
}

export default frontPage;

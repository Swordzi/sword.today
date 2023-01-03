// BSD 3-Clause License
//
// Copyright (c) 2022, Iiro Polso
// All rights reserved.


// Importing React to get react functionality, logo for my profile picture and video for backgorund. Importing app.scss for the CSS for the main page.
import React from "react";
import logo from './Profile-modified.png';
import './Styles/App.scss';
import waves from './videos/waves.mp4'
import github from './media/github-logo.png'
// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function frontPage() {
    return (
        // The full source code for this project can be found at https://github.com/Swordzi/sword.today
        <div className="Front">
            <header className="Front-header">
                <video autoPlay loop muted id='background'>
                    <source src={waves} type='video/mp4'/>
                </video>
                <img src={logo} className="Front-logo" alt="logo"/>
                <p id="Name">Sword</p>
                <a
                    className="github-link"
                    href="https://github.com/Swordzi"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={github} className="github-logo" alt="github"/>
                </a>
                <a
                className="Projects-link"
                href='./Pages/Projects.tsx'
                target="_blank"
                rel="noopener noreferrer"
                >


                </a>
               
            </header>
        </div>
    );
}

export default frontPage;

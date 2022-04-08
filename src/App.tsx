import React from "react";
import logo from './Profile-modified.png';
import './App.css';
import backgroundVideo from './videos/bgvideo.mp4'

function frontPage() {
    return (
        <div className="App">
            <header className="App-header">
                <video autoPlay loop muted id='background'>
                    <source src={backgroundVideo} type='video/mp4'/>
                </video>


                <img src={logo} className="App-logo" alt="logo"/>
                <p id="Name">Sword</p>

            </header>
        </div>

    );
}

export default frontPage;

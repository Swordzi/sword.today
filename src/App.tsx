import React from "react";
import logo from './Profile-modified.png';
import './App.css';
import waves from './videos/waves.mp4'

function frontPage() {
  return (
      <div className="App">
        <header className="App-header">
          <video autoPlay loop muted id='background'>
            <source src={waves} type='video/mp4'/>
          </video>


          <img src={logo} className="App-logo" alt="logo"/>
          <p id="Name">Sword</p>

        </header>
      </div>

  );
}

export default frontPage;

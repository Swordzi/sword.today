import React from 'react';
import logo from './Profile-modified.png';
import './App.css';





function App() {
    return (
        <div className="App">
            <header className="App-header">
                <video autoPlay loop muted id='video'>
                    <source
                        src="https://www.youtube.com/watch?v=HKT9wctwL6g"
                        type='video/mp4'/>
                </video>

                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Sword
                </p>


            </header>
        </div>
    );
}

export default App;

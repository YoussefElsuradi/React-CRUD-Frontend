import React, { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  }
  return (
       <div className="App">
      <header className="App-header">
        <button className="menu-button" onClick={handleMenuClick}>
          &#x2630;
        </button>
        {menuOpen && (
          <div className="menu-content">
            <div className="text">
              <div className="content">
                <p>
                  <a className="link1" href="https://github.com/">Example</a>
                </p>
              </div>
            </div>
          </div>
        )}
        
        <h1>Employee Management app </h1>
        <p>Homepage</p>


        <a>
        </a>
      </header>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="logo.png" alt="logo" />
        </div>
        <div className="navbar-links">
          <a href="#">All Employees</a>
          <a href="#">All Tasks</a>
        </div>
      </nav>
      <div className="content">
        <h1>Welcome to Employee Management App</h1>
        <p>This is the homepage</p>
      </div>
      <button className="button1">yo</button>
    </div>

  );
}

export default App;

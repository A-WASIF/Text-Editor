import React from 'react'
import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Text Editor</div>
      <ul className="navbar-nav">
        <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="/" className="nav-link">About</a></li>
        <li className="nav-item"><a href="/" className="nav-link">Contact</a></li>
      </ul>
    </nav>
  )
}

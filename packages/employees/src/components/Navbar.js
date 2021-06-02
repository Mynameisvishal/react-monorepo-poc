import React from 'react'
import { FaAlignRight } from "react-icons/fa"
import pageLinks from "../constants/pageLinks"
import { Link, BrowserRouter as Router } from "react-router-dom"
import './Navbar.css';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar" >

      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="link">
            <h3>HTC GLOBAL SERVICES</h3>
          </Link>
            <button
            type="button"
            className="toggle-btn"
            onClick={toggleSidebar}
            >
              <FaAlignRight />
            </button>
        </div>
        <div className="nav-links">
          {pageLinks.map(link => {
            return (
              <Link key={link.id} to={link.url} className="link">
                {link.text}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>

  )
}

export default Navbar


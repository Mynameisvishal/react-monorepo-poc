import React from "react"
import links from "../constants/pageLinks"
import { Link,BrowserRouter as Router } from "react-router-dom"
import { FaTimes } from "react-icons/fa"
import './Sidebar.css'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <Router>

    <aside className={isOpen ? "sidebar show-sidebar" : "sidebar"}>
      <button className="close-btn" type="button" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <ul className={isOpen ? "sidebar-links" : null}>
          {links.map(link => {
            return (
              <li key={link.id}>
                <Link to={link.url} onClick={toggleSidebar}>
                  {link.text}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
          </Router>
  )
}

export default Sidebar

import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-dark py-4 fw-bolder">
  <div className="container">
    <Link className="navbar-brand text-white fs-2 text-decoration-none" to="/home">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

        <li className="nav-item px-2">
          <Link className="nav-Link text-white active text-decoration-none" to="/about">ABOUT</Link>
        </li>
        <li className="nav-item px-2">
          <Link className="nav-Link text-white active text-decoration-none" to="/portfolio">PORTFOLIO</Link>
        </li>
        <li className="nav-item px-2">
          <Link className="nav-Link text-white active text-decoration-none" to="/contact">CONTACT</Link>
        </li>
      </ul>

    </div>
  </div>
</nav>

    
    </>
  )
}

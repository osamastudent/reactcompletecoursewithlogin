import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();
  const [localEmail, setLocalEmail] = useState();

  useEffect(() => {
    setLocalEmail(localStorage.getItem("email"));
  })
  const logout = () => {
    localStorage.clear();
    navigate("/Login");
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink to="/createusers">Create</NavLink>
              </li>
              
              <li className="nav-item mx-2">
                <NavLink to="/About">About</NavLink>
              
              </li>
              <li className="nav-item mx-2">
                <NavLink to="/Contact">Contact</NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink to="/AddStudent">AddStudent</NavLink>
              </li>
              
              <li className="nav-item mx-2">
                <NavLink to="/Read">Read</NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink to="/Login">Login</NavLink>
              </li>
              {localEmail ?

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {localEmail}
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#" onClick={logout}>LogOut</a></li>

                  </ul>
                </li>

                : null}
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

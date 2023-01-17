import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = ({customer}) => {
  return (
    <div>
      {/* {customer?
                (
                  <div className="loggedout">
                  <NavLink className="login" to="/login">Login</NavLink>
                  <NavLink className="signup" to="/signup">Signup</NavLink>
                  </div>
                  )
                  :
                (
                  <div className="loggedin">
                <NavLink className="logout" to="/logout">Logout</NavLink>
                </div>
                )
               
              } */}
                  <NavLink className="login" to="/login">Login</NavLink>
                  <NavLink className="signup" to="/signup">Signup</NavLink>
                  <NavLink className="logout" to="/logout">Logout</NavLink>
    </div>
  )
}

export default NavBar

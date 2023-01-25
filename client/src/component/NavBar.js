import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = ({customer}) => {
  return (
    <div>
      {customer?
                (
                  <div className="loggedin">
                <NavLink className="logout" to="/logout">Logout</NavLink>
                <NavLink className="Orders" to="/orders">My Orders</NavLink>
                <NavLink className="home" to="/home">Home</NavLink>
                <NavLink className="Profile" to="/profile">Profile</NavLink>
                </div>
                )
                :
                (
                  <div className="loggedout">
                  <NavLink className="login" to="/login">Login</NavLink>
                  <NavLink className="signup" to="/signup">Signup</NavLink>
                  </div>
                  )
                 
              }
                  {/* <NavLink className="login" to="/login">Login</NavLink>
                  <NavLink className="signup" to="/signup">Signup</NavLink>
                  <NavLink className="logout" to="/logout">Logout</NavLink> */}
    </div>
  )
}

export default NavBar

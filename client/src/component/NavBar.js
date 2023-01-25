import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = ({customer}) => {
  return (
    <div id='nav' >
      <h1>Hydro-Flask</h1>
      <br></br>
      {customer?
                (
                  <div className="loggedin">
                <NavLink id='btn1' className="navBtn" to="/logout">Logout</NavLink>
                <NavLink id='btn2' className="navBtn" to="/orders">My Orders</NavLink>
                <NavLink id='btn3' className="navBtn" to="/home">Home</NavLink>
                <NavLink id='btn4' className="navBtn" to="/profile">Profile</NavLink>
                </div>
                )
                :
                (
                  <div className="loggedout">
                  <NavLink id='btn5' className="navBtn" to="/login">Login</NavLink>
                  <NavLink id='btn6' className="navBtn" to="/signup">Signup</NavLink>
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

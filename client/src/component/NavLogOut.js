import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLogOut = ({customer}) => {
  return (
    <div>
      <NavLink className="logout" to="/logout">Logout</NavLink>
    </div>
  )
}

export default NavLogOut

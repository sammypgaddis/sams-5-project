import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogOut = ({customer, setCustomer}) => {

  let navigate = useNavigate()

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
            setCustomer(null);
            navigate("/login")
        }
        });
    }

    // console.log(customer)

  return (
    <div classname="logout">
             <h1>Are you sure you want to log out?</h1>
            <button className="logout-button" onClick={handleLogoutClick}>Log Out</button>
    </div>
  )
}

export default LogOut

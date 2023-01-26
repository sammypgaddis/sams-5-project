import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Profile = ({ customer, setCustomer }) => {
  const [formData, setFormData] = useState({
    name: customer.name,
    username: customer.username,
    birthdate: customer.birthdate
  })
 let navigate = useNavigate()
  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    // make patch request to update customer information
    fetch(`/customers/${customer.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(updatedCustomer => {
        setCustomer(updatedCustomer)
        navigate('/home')
      })
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1> Update Profile</h1>
      <label>
        Name:
        <input
        className="formTxtArea"
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <label>
        Username:
        <input
        className="formTxtArea"
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <label>
        Birthdate:
        <input
        className="formTxtArea"
          type='text'
          name='birthdate'
          value={formData.birthdate}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <button type='submit'>Update Profile</button>
    </form>
  )
}

export default Profile
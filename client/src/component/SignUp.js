import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = ({customer, setCustomer}) => {

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [password, setPassword] = useState("");
  
  let navigate = useNavigate()

  function handleSubmit(e) {
  e.preventDefault();
  fetch("/customers", {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify({
      name: name,
      username: username,
      birthdate: birthdate,
      password: password
      
      }),
  })
  .then((r) => {
      if (r.ok) {
      r.json()
      .then((user) => setCustomer(user));
      alert("You're officially signed up")
      navigate('/login')
      }
  });
  }
  // console.log(customer)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <br/>
        <label>Name:</label>
        <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <br/>
        <label >Username:</label>
        <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <br/>
        <label>Birthdate:</label>
        <input
            type="date"
            id="birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
        />
        <br/>
        <label >Password:</label>
        <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
        />
        <br/>
        <button type="submit">Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp

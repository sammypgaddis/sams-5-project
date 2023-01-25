import { useEffect, useState } from 'react';
import {Route, Routes} from 'react-router-dom';
import NavBar from './component/NavBar';
import Login from './component/Login';
import LogOut from './component/LogOut';
import SignUp from './component/SignUp';
import Home from './component/Home';
import './App.css';
import MyOrders from './component/MyOrders';
import Profile from './component/Profile';

function App() {
  const [customer, setCustomer]= useState(null)
  // console.log(customer)
  
  useEffect(() =>{
    fetch("/user_logged_in")
    .then (r => r.json())
    .then((user) => {
      // console.log(user)
      setCustomer(user)} )
    },[])

  return (
    <div className="App">
      <NavBar customer={customer}/>
      <header className="App-header"> water bottle 
      </header>

      <Routes>
        <Route exact path="/home" element={<Home customer={customer} setCustomer={setCustomer}/>}/>
        <Route exact path="/login" element= {<Login customer={customer} setCustomer={setCustomer} />}/>
        <Route exact path="/logout" element= {<LogOut customer={customer} setCustomer={setCustomer} />}/>
        <Route exact path="signup" element= {<SignUp customer={customer} setCustomer={setCustomer}/>}/>
        <Route exact path="/orders" element= {<MyOrders customer={customer} setCustomer={setCustomer} />}/>
        <Route exact path="/profile" element= {<Profile customer={customer} setCustomer={setCustomer} />}/>
      </Routes>
      {/* <Routes>
          <Route exact path="/home">
            element={<Home customer={customer} setCustomer={setCustomer}/>}
          </Route>

          <Route exact path="/login">
            element={<Login customer={customer} setCustomer={setCustomer} />}
            {<NavBar customer={customer}/>}
          </Route>

          <Route exact path="/logout">
            element={<LogOut customer={customer} setCustomer={setCustomer} />}
            {<NavBar customer={customer}/>}
          </Route>
          <Route exact path="signup">
            element={<SignUp customer={customer} setCustomer={setCustomer}/>}
            {<NavBar customer={customer}/>}
          </Route>
      </Routes> */}
      
    </div>
  );
}

export default App;

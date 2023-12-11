
import React, { useState } from 'react';
import "./login.css"
import { Link } from 'react-router-dom';

import axios from 'axios'

const Login = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const [result, setResult] = useState("");

  const handleLoginSubmit = async(e) => {
    e.preventDefault();

    const mailID = loginData.email
    console.log(mailID)

    try {
        await axios.get('http://localhost:3000/getUserByEmail/'+ mailID ,{headers:{'Content-Type':'application/json'}}).then(response=>{
            console.log("rec",response.data.data[0])
            setResult(response.data.data[0]);
        });
         
      } catch (error) {
        console.error(error);
      }
console.log(result.Username)

setLoginData({
    email: '', password: '' 
})

  };

  return (
    <form onSubmit={handleLoginSubmit}>
        <h1>LogIn</h1>
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={loginData.email}
        onChange={handleLoginChange}
        required
      />
      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={loginData.password}
        onChange={handleLoginChange}
        required
      />
      <button type="submit">Login</button>
      <p> Create a account <Link to='/signup'>Create</Link> </p>

      {/* <p>{result.username}</p> */}
    </form>
  );
};

export default Login;

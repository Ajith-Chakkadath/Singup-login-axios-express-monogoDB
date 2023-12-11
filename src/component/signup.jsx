
import React, { useState } from 'react';
import "./login.css"
import { Link } from 'react-router-dom';
import axios from "axios";

const Signup = () => {
  const [signupData, setSignupData] = useState({ username : '' ,email: '', password: '' });

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleSignupSubmit = async(e) => {
    e.preventDefault();

     try{
        await axios.post("http://localhost:3000/read",{signupData},{headers:{'Content-Type':'application/json'}}).then(response=>{
         console.log("rec",response)})
        
      }
      catch (error) {
        console.error(error);
      }
  
  };

  return (
    <form onSubmit={handleSignupSubmit}>
        <h1>Sign Up </h1>
        <label>User Name:</label>
      <input
        type="text"
        name="username"
        value={signupData.username}
        onChange={handleSignupChange}
        required
      />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={signupData.email}
        onChange={handleSignupChange}
        required
      />
      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={signupData.password}
        onChange={handleSignupChange}
        required
      />
      <button type="submit">Signup</button>
      <p>Already have account <Link to='/'>Login</Link> </p>
    </form>
  );
};

export default Signup;

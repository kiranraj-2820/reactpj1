// import React from "react"; 

// function SINGIN(){
//     return(
//       <h1>This is SINGIN page </h1>
//     )
//   }
//   export default SINGIN;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const [signupData, setSignupData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const { username, password } = signupData; // ✅ FIXED lowercase 'signupData'

    if (localStorage.getItem(username)) {
      setMessage('Username already exists!');
    } else {
      localStorage.setItem(username, JSON.stringify({ password }));
      localStorage.setItem('currentUser', username);
      setMessage('Signup successful!');
      setSignupData({ username: '', password: '' });

      setTimeout(() => {
        navigate('/');
      }, 1000);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={signupData.username} // ✅ FIXED
          onChange={(e) => setSignupData({ ...signupData, username: e.target.value })} // ✅ FIXED
          required
        /><br />
        <input
          type="password"
          placeholder="Password"
          value={signupData.password} // ✅ FIXED
          onChange={(e) => setSignupData({ ...signupData, password: e.target.value })} // ✅ FIXED
          required
        /><br />
        <button type="submit">Register</button>
      </form>
      <h4>{message}</h4>
    </div>
  );
};

export default Signup;


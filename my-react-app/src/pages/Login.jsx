// import React from "react";   

// function LOGIN(){
//     return(
//       <h1>This is LOGIN page </h1>
//     )
//   }
//   export default LOGIN;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';


const LOGIN = () => {
  const [LOGINData, setLOGINData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLOGIN = (e) => {
    e.preventDefault();
    const { username, password } = LOGINData;

    const user = localStorage.getItem(username);
    if (!user) {
      setMessage('User does not exist!');
      return;
    }

    const storedPassword = JSON.parse(user).password;
    if (storedPassword === password) {
      setMessage('LOGIN successful!');
      localStorage.setItem('currentUser', username); // save logged-in user
      setLOGINData({ username: '', password: '' });

      // Redirect to home page after 1 second
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } else {
      setMessage('Incorrect password!');
    }
  };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>LOGIN</h2>
//       <form onSubmit={handleLOGIN}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={LOGINData.username}
//           onChange={(e) => setLOGINData({ ...LOGINData, username: e.target.value })}
//           required
//         /><br />
//         <input
//           type="password"
//           placeholder="Password"
//           value={LOGINData.password}
//           onChange={(e) => setLOGINData({ ...LOGINData, password: e.target.value })}
//           required
//         /><br />
//         <button type="submit">LOGIN</button>
//       </form>
//       <h4>{message}</h4>
//     </div>

//       );
// };

return (
  <div className="login-background">
    <div className="login-container">
      <h2>LOGIN</h2>
      <form onSubmit={handleLOGIN}>
        <input
          type="text"
          placeholder="Username"
          value={LOGINData.username}
          onChange={(e) => setLOGINData({ ...LOGINData, username: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={LOGINData.password}
          onChange={(e) => setLOGINData({ ...LOGINData, password: e.target.value })}
          required
        />
        <button type="submit">LOGIN</button>
      </form>
      <h4>{message}</h4>
    </div>
  </div>
);
}



export default LOGIN;



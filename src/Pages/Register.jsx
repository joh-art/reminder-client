import React, { useState } from 'react';
import "./Register.css"
import Axios from "axios"

function RegistrationForm(props) {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
  
    console.log(userName, email, password);
    Axios.post("http://localhost:5000/register", {
      username: userName, // Correct the key name to "username"
      email: email,
      password: password,
    })
      .then((response) => {
        const data = response.data;
  
        console.log(data, "userRegister");
        if (data.message === "Registration successful") {
          alert("Registration Successful");
        } else {
          alert("Something went wrong");
        }
      })
      .catch((error) => {
        console.error("Registration error:", error);
        alert("Something went wrong"); // Handle errors
      });
  };
  
  
  
 




  return (
    <div className="register-form-container">
      <h2 className='register-h1'>Register</h2>
      <form>
        <label className='register-label'>Name:</label>
        <input
        className='register-input'
          type="text"
          name="name"
          value={userName}
         onChange={(e) => setUserName(e.target.value)}
        />

        <label className='register-label'>Email:</label>
        <input
        className='register-input'
          type="email"
          name="email"
          value={email}
         onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
        className='register-input'
          type="password"
          name="password"
          value={password}
         onChange={(e) => setPassword(e.target.value)}
        />

        <button className='main-register-btn' onClick={handleRegister}>Register</button>
      </form>
      <button className='register-btn' onClick={() => props.onFormSwitch('Login')}>Already have an account? Login.</button>
    </div>
  );


  }
export default RegistrationForm;






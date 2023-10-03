import React, { useState } from "react";
import "./Login.css";
import Axios from "axios";
import { Link, useNavigate} from "react-router-dom";

function LoginForm(props) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/login", {
      email: loginEmail, // Use the correct field names for email and password
      password: loginPassword,
    })
      .then((response) => {
        const responseData = response.data;
        console.log(responseData);
        if (response.data.message === "Login successful") {
         
          // Store the JWT token securely in local storage
        localStorage.setItem('jwtToken', response.data.token);
          // Handle successful login, e.g., redirect to the dashboard
          navigate('/DashBoard');
        } else {
          setErrorMessage('Invalid credentials. Please try again.');
          // Handle invalid credentials or other errors
          navigate('/');
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        // Handle errors
      });
  };
  

  return (
    <div className="login-form-container">
      <h2 className="login-h1">Login</h2>
      
      <form>
        <label>Email:</label>
        <input
          className="register-input"
          type="email"
          name="email"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          className="login-input"
          type="password"
          name="password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />

        
          <button className="main-login-btn" onClick={handleLogin}>
          <Link to="/"> Login</Link>
           
          </button>
      
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button
        className="login-btn"
        onClick={() => props.onFormSwitch("Register")}
      >
        Don't have an account? Register.
      </button>
    </div>
  );
}

export default LoginForm;

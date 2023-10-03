
import React,{useState} from 'react';
import '../Pages/Home.css'; 
import Login from './Login'
import Register from './Register'

function Home() {


  const [isLogin, setIsLogin] = useState("Login"); // State to track the active form

  const toggle = () => {
    // Toggle between login and register when the button is clicked
    setIsLogin(!isLogin);
  };


  return (
    <>
    <div className="home">
      <div className="background-image"></div>
      <div className="content-form">
      <div className="content">
        <h1 className="animated-text">Welcome to Our Website</h1>
        <div className='login-register'>
        {
          isLogin === "Login" ?
          <Login onFormSwitch={toggle} /> : <Register onFormSwitch={toggle}  /> 
        }
        </div>
      </div>
      </div>
    
    </div>
    </>
  );
}

export default Home;

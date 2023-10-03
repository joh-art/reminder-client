// app.post("/register", async (req, res) => {
//     try {
//       // Check if any of the required fields is missing
//       if (
//         !req.body.username ||
//         !req.body.email ||
//         !req.body.password
//       ) {
//         return res.status(400).send({
//           message: 'Please provide username, email, and password',
//         });
//       }
  
//       // Check if the email already exists
//       const emailToSearch = req.body.email;
//       const existingUser = await Users.findOne({ email: emailToSearch });
  
//       if (existingUser) {
//         return res.status(400).json({ error: 'User with the email already exists' });
//       }
  
//       // Create a new user
//       const newUser = new Users({
//         username: req.body.username,
//         email: req.body.email,
//         password: req.body.password,
//       });
  
//       await newUser.save();
  
//       // Generate a JWT token for the newly registered user
//       const token = generateToken(newUser._id);
  
//       res.status(201).json({ message: 'Registration successful', token });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });
  
//   app.post("/login", async (req, res) => {
//     try {
//       const { email, password } = req.body;
  
//       // Find the user by email
//       const user = await Users.findOne({ email });
  
//       // If the user does not exist, return an error
//       if (!user) {
//         return res.status(400).json({ error: 'User not found' });
//       }
  
//       // Check if the provided password matches the user's password
//       if (password === user.password) {
//         // Passwords match, so you can consider the user logged in
//         // Generate a JWT token for the authenticated user
//         const token = generateToken(user._id);
  
//         // In this example, we're sending the token and user information
//         return res.status(200).json({ message: 'Login successful', token, user });
//       } else {
//         return res.status(401).json({ error: 'Invalid Credentials' });
//       }
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });


const protectRoute = (req, res, next) => {
    // Check if the user is authenticated (e.g., using JWT)
    // You can implement this middleware based on your authentication method
    if (req.isAuthenticated()) {
      return next(); // User is authenticated, continue to the route
    }
    res.status(401).json({ error: 'Unauthorized' });
  };
  
  // Profile route (protected)
  app.get('/api/user/profile', protectRoute, (req, res) => {
    // Retrieve user information from the authenticated user object
    const user = req.user; // Assuming you store user info in req.user
  
    // Send the user's profile information as a response
    res.json({
      name: user.name,
      email: user.email,
    });
  });


  // Profile.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Fetch user information from the backend when the component mounts
    axios.get('/api/user/profile').then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Profile;

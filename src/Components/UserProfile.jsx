import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import "./UserProfile.css"
import SideBar from './Sidebar/SideBar';
import Back from '../Components/backbutton/Back'
import axios from 'axios';

function UserProfile() {
  const [userProfile, setUserProfile] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const token = 'Bearer ';
    // Fetch user information from the backend when the component mounts
    axios.get(`http://localhost:5000/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Include the JWT token in the headers
      },
    })
      .then((response) => {
        const userProfileData = response.data;
        console.log('User Profile:', userProfileData);
        setUserProfile(userProfileData); // Store user profile data in state
      })
      .catch((error) => {
        console.error('Error fetching user profile:', error);
      });
  }, [id]);

  return (
    <div className="dashboard">
    <div className="profile-sidebar">
      <SideBar />
      </div>
    <div className="user-profile">
 
    <h1>Profile</h1>
    <div className='profile-image'>
      <img
        src={userProfile.profileImage} // You should have a field for profile image URL in your user data
        alt="Profile"
        style={{ width: '150px', height: '150px', borderRadius: '50%' }}
      />
    </div>
    <div className="profile-info">
    <h2>Name: {userProfile.username}</h2>
    <p>Email: {userProfile.email}</p>
  </div>
  <Back label="Go Back" />
  </div>
  
    </div>
  );
}

export default UserProfile;


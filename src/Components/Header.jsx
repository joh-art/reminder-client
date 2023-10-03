import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import DashBoard from "../Pages/DashBoard";
import SideBar from "../Components/Sidebar/SideBar";
import Main from "../Components/Main/Main";
import LectureSchedule from "./LectureSchedule";
import ReminderForm from "./ReminderForm";
import ReminderEdit from "./ReminderEdit";
import ReminderList from "./ReminderList";
import ReminderDelete from "./ReminderDelete";
import UserProfile from "./UserProfile";
import CreateLecture from "./Lecture/CreateLecture";
import EditLecture from "./Lecture/EditLecture";
import DeleteLecture from "./Lecture/DeleteLecture";
import ProfileHistory from "./ProfileHistory";
import FAQ from "./FAQ";
import { Link } from "react-router-dom"; 
import "./Header.css"; // Import your CSS file for styling
import reminderlogo from "../image/reminderlogo.png"


const Header = () => {

  


  return (
    <>
      <header className="header-main">
        <div className="header-logo">
          <Link to="/">
            <img src={reminderlogo} alt="reminder" />
          </Link>
        </div>
      </header>
      <div className="route">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/SideBar" element={<SideBar />} />
        <Route path="/LectureSchedule" element={<LectureSchedule />} />
        <Route path="/ReminderForm" element={<ReminderForm />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/ReminderEdit/:id" element={<ReminderEdit />} />
        <Route path="/ReminderDelete" element={<ReminderDelete />} />
        <Route path="/ReminderList" element={<ReminderList />} />
        <Route path="/CreateLecture" element={<CreateLecture />} />
        <Route path="/EditLecture/:id" element={<EditLecture />} />
        <Route path="/DeleteLecture" element={<DeleteLecture />} />
        <Route path="/ProfileHistory" element={<ProfileHistory />} />
        <Route path="/FAQ" element={<FAQ />} />
      </Routes>
      </div>
    </>
  );
};

export default Header;

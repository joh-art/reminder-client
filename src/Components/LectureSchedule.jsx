// LectureSchedule.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Lecture.css";
import SideBar from "./Sidebar/SideBar";
import axios from "axios";

function LectureSchedule() {
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    // Fetch lectures from the server when the component mounts
    axios.get("http://localhost:5000/lectures")
      .then((response) => {
        setLectures(response.data);
      })
      .catch((error) => {
        console.error("Error fetching lecture details:", error);
      });
  }, []);

  return (
    <div className="dashboard">
      <div className="reminder-sidebar">
        <SideBar />
      </div>
      <div className="lecture-schedule">
        <h2>Lecture Schedule</h2>
        <table>
          <thead>
            <tr>
              <th>Topic</th>
              <th>Date</th>
              <th>Time</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {lectures.map((lecture) => (
              <tr key={lecture._id}>
                <td>{lecture.topic}</td>
                <td>{lecture.date}</td>
                <td>{lecture.time}</td>
                <td>{lecture.location}</td>
                <td>
                  <Link to={'/DeleteLecture'}>
                    <button>REMOVE</button>
                  </Link>
                  <Link to={`/EditLecture/${lecture._id}`}>
                    <button>UPDATE</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="status-btns">
          <Link to="/CreateLecture"> {/* Add a Link to the "Add" button */}
            <button>Add</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LectureSchedule;



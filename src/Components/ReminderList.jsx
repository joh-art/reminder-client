import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ReminderList.css";
import SideBar from "./Sidebar/SideBar"; // Make sure to import SideBar if needed

const ReminderList = () => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    // Fetch reminders from the server when the component mounts
    axios
      .get("http://localhost:5000/reminderforms")
      .then((response) => {
        setReminders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching reminder details:", error);
      });
  }, []);

  return (
    <div className="dashboard">
      <div className="reminder-sidebar">
        <SideBar />
      </div>
      <div className="lecture-schedule">
        <h2>Reminder List</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Lecture Title</th>
              <th>Date</th>
              <th>Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reminders && reminders.length > 0 ? (
              reminders.map((reminder, index) => (
                <tr key={reminder._id}>
                  <td>{index + 1}</td>
                  <td>{reminder.lecturetitle}</td>
                  <td>{reminder.date}</td>
                  <td>{reminder.time}</td>
                  <td>
                    <Link to={`/ReminderEdit/${reminder._id}`}>
                      <button>UPDATE</button>
                    </Link>
                    <Link to={'/ReminderDelete'}>
                    <button>REMOVE</button>
                  </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No reminders available.</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="status-btns">
          <Link to="/ReminderForm">
            <button>Add</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReminderList;

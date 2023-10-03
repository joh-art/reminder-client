import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";
// import LectureSchedule from '../LectureSchedule';
// import ReminderForm from '../ReminderForm';

function Main() {
  return (
    <div className="main">
      <h1>Welcome to Your Dashboard</h1>
      <div className="display-flex">
        {/* Section with Brief Info and Buttons */}
        <section className="dashboard-section">
          <div className="dashboard-info">
            <h2>Lecture Schedule</h2>
            <p>View and manage your lecture schedule here.</p>
            <Link to="/lectureschedule">
              <button className="dashboard-button">
                Go to Lecture Schedule
              </button>
            </Link>
          </div>
        </section>

        <section className="dashboard-section">
          <div className="dashboard-info">
            <h2>Create Lecture</h2>
            <p>Create a new lecture and add it to your schedule.</p>
            <Link to="/create-lecture">
              <button className="dashboard-button">Create a Lecture</button>
            </Link>
          </div>
        </section>
      </div>
      <div className="display-flex">
        <section className="dashboard-section">
          <div className="dashboard-info">
            <h2>Lecture Edit</h2>
            <p>Edit existing lectures or make changes to your schedule.</p>
            <Link to="/lecture-edit">
              <button className="dashboard-button">Edit Lectures</button>
            </Link>
          </div>
        </section>

        <section className="dashboard-section">
          <div className="dashboard-info">
            <h2>FAQ</h2>
            <p>Get answers to frequently asked questions.</p>
            <Link to="/faq">
              <button className="dashboard-button">Visit FAQ</button>
            </Link>
          </div>
        </section>
      </div>
      <div className="display-flex">
      <section className="display-flex-1">
        <div className="info-item">
          <h2>Reminder Form</h2>
          <p>Create new reminders easily.</p>
          <Link to="/reminderform">
            <button className="dashboard-button">Go to Reminder Form</button>
          </Link>
        </div>
        </section>
        <section className="display-flex-1">
        <div className="info-item">
          <h2>Reminder Edit</h2>
          <p>Edit and update existing reminders.</p>
          <Link to="/reminderedit">
            <button className="dashboard-button">Go to Reminder Edit</button>
          </Link>
        </div>{" "}
        </section>
      </div>
      <div className="display-flex">
      <section className="display-flex-1">
        <div className="info-item">
          <h2>Reminder List</h2>
          <p>View your list of reminders.</p>
          <Link to="/reminderlist">
            <button className="dashboard-button">Go to Reminder List</button>
          </Link>
        </div>
        </section>
        <section className="display-flex-1">
        <div className="info-item">
          <h2>FAQ</h2>
          <p>Find answers to common questions.</p>
          <Link to="/faq">
            <button className="dashboard-button">Go to FAQ</button>
          </Link>
        </div>
        </section>
      </div>
    </div>
  );
}

export default Main;

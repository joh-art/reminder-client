import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import './ReminderEdit.css'

function UpdateReminderForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [reminderForm, setReminderForm] = useState({
    lecturetitle: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReminderForm({
      ...reminderForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/reminderforms/${id}`,
        reminderForm
      );
      console.log("Reminder form updated:", response.data);
      navigate("/ReminderList"); // Redirect to the reminder list after update
    } catch (error) {
      console.error("Error updating reminder form:", error);
    }
  };

  useEffect(() => {
    // Fetch the existing reminder form data
    if (id) {
      axios.get(`http://localhost:5000/reminderforms/${id}`)
        .then((response) => {
          const { date, time, lecturetitle} = response.data;
          setReminderForm({ date, time, lecturetitle});
      }).catch((error) => {
        console.error("Error fetching reminder form data:", error);
      });
    }
  
  }, [id]);

  return (
    <div className="edit-wrapper">
      <h1 className="edit-h1">Update Reminder Form</h1>
      <form className='edit-form' onSubmit={handleSubmit}>
        <input
        className="edit-inputs"
          type="text"
          name="lecturetitle"
          value={reminderForm.lecturetitle}
          onChange={handleChange}
          placeholder="Lecture Title"
        />
        <input
        className="edit-inputs"
          type="date"
          name="date"
          value={reminderForm.date}
          onChange={handleChange}
          placeholder="Date"
        />
        <input
        className="edit-inputs"
          type="time"
          name="time"
          value={reminderForm.time}
          onChange={handleChange}
          placeholder="Time"
        />
        <button className="edit-button" type="submit">Update Reminder Form</button>
      </form>
    </div>
  );
}

export default UpdateReminderForm;

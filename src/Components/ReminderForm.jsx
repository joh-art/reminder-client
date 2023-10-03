import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import "./ReminderForm.css";
import axios from 'axios';

function CreateReminderForm() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
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
      const response = await axios.post("http://localhost:5000/reminderforms", reminderForm);
      console.log("Reminder form created:", response.data);
      enqueueSnackbar('Book Created successfully', { variant: 'success' });
      navigate('/ReminderList'); // Redirect to the reminder list after creation
    } catch (error) {
      console.error("Error creating reminder form:", error);
    }
  };

  return (
    <div  className="create-reminder-form">
      <h1>Create Reminder Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="lecturetitle"
          value={reminderForm.lecturetitle}
          onChange={handleChange}
          placeholder="Lecture Title"
        />
        <input
          type="date"
          name="date"
          value={reminderForm.date}
          onChange={handleChange}
          placeholder="Date"
        />
        <input
          type="time"
          name="time"
          value={reminderForm.time}
          onChange={handleChange}
          placeholder="Time"
        />
        <button onClick={handleSubmit}  type="submit">Create Reminder Form</button>
      </form>
    </div>
  );
}

export default CreateReminderForm;

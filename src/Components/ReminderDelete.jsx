
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import './ReminderDelete.css'

function DeleteReminderForm() {
  const [reminderForms, setReminderForms] = useState([]);
  const { formId } = useParams();
  const navigate = useNavigate();
  const handleDelete = async (formId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/reminderforms/${formId}`);
      console.log("Reminder form deleted:", response.data);
      // Update the UI to reflect the deleted reminder form
      setReminderForms((prevReminderForms) => prevReminderForms.filter((form) => form._id !== formId));
      navigate('/ReminderList');
    } catch (error) {
      console.error("Error deleting reminder form:", error);
    }
  };

  useEffect(() => {
    // Fetch the list of reminder forms from the server
    async function fetchReminderForms() {
      try {
        const response = await axios.get("http://localhost:5000/reminderforms");
        setReminderForms(response.data);
      } catch (error) {
        console.error("Error fetching reminder forms:", error);
      }
    }
    fetchReminderForms();
  }, []);

  return (
    <div className="delete-reminder-form">
      <h1>Delete Reminder Form</h1>
      <ul>
        {reminderForms.map((form) => (
          <li key={form._id}>
            {form.lecturetitle} - {form.date} - {form.time}
            <button  onClick={() => handleDelete(form._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DeleteReminderForm;

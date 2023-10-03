// EditLecture.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './MainEdit.css';

function EditLecture() {
  const { id } = useParams();

  const [lecture, setLecture] = useState({
    date: "",
    time: "",
    topic: "",
    location: "",
  });

  useEffect(() => {
    if (id) { // Check if id is defined
      // Fetch the existing lecture data for editing
      axios
        .get(`http://localhost:5000/lectures/${id}`)
        .then((response) => {
          const { date, time, topic, location } = response.data;
          setLecture({ date, time, topic, location });
        })
        .catch((error) => {
          console.error("Error fetching lecture data:", error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLecture({ ...lecture, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      // Send a PUT request to update the lecture data
      const response = await axios.put(`http://localhost:5000/lectures/${id}`, lecture);
      console.log("Lecture updated:", response.data);
      // Redirect or show a success message
    } catch (error) {
      console.error("Error updating lecture:", error);
    }
  };

  return (
    <div className="editmain-lecture-container">
      <h1 className="edit-h1">Edit Lecture</h1>
      <form className="edit-form" onSubmit={handleUpdate}>
        <input
          className="edit-inputs"
          type="date"
          name="date"
          value={lecture.date}
          onChange={handleChange}
        />
        <input
          className="edit-inputs"
          type="time"
          name="time"
          value={lecture.time}
          onChange={handleChange}
        />
        <input
          className="edit-inputs"
          type="text"
          name="topic"
          value={lecture.topic}
          onChange={handleChange}
        />
        <input
          className="edit-inputs"
          type="text"
          name="location"
          value={lecture.location}
          onChange={handleChange}
        />
        <button onClick={handleUpdate} className="edit-submit" type="submit">
          Update Lecture
        </button>
      </form>
    </div>
  );
}

export default EditLecture;

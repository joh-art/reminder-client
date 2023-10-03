// CreateLecture.js
import React, { useState } from "react";
import axios from "axios";
import './Create.css'

function CreateLecture() {
  const [lecture, setLecture] = useState({
    date: "",
    time: "",
    topic: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLecture({ ...lecture, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/lectures", lecture);
      console.log("Lecture created:", response.data);
      // Redirect or show a success message
    } catch (error) {
      console.error("Error creating lecture:", error);
    }
  };

  return (
    <div className="create-lecture-container">
      <h1 className="create-h1">Create Lecture</h1>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
        className="create-inputs"
          type="date"
          name="date"
          value={lecture.date}
          onChange={handleChange}
        />
        <input
        className="create-inputs"
          type="time"
          name="time"
          value={lecture.time}
          onChange={handleChange}
        />
        <input
        className="create-inputs"
          type="text"
          name="topic"
          value={lecture.topic}
          onChange={handleChange}
        />
        <input
        className="create-inputs"
          type="text"
          name="location"
          value={lecture.location}
          onChange={handleChange}
        />
        <button onClick={handleSubmit} className="create-submit" type="submit">Create Lecture</button>
      </form>
    </div>
  );
}

export default CreateLecture;

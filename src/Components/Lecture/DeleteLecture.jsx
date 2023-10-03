// DeleteLecture.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './Delete.css'

function DeleteLecture() {
  const [lectures, setLectures] = useState([]);
  const { lectureId } = useParams();
  const handleDelete = async (lectureId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/lectures/${lectureId}`);
      console.log("Lecture deleted:", response.data);
      // Update the UI to reflect the deleted lecture
      setLectures((prevLectures) => prevLectures.filter((lecture) => lecture._id !== lectureId));
    } catch (error) {
      console.error("Error deleting lecture:", error);
    }
  };

  useEffect(() => {
    // Fetch the list of lectures from the server
    async function fetchLectures() {
      try {
        const response = await axios.get("http://localhost:5000/lectures");
        setLectures(response.data);
      } catch (error) {
        console.error("Error fetching lectures:", error);
      }
    }
    fetchLectures();
  }, [lectureId]);

  return (
    <div className="delete-lecture-container">
      <h1 className="delete-h1">Delete Lecture</h1>
      <ul className="delete-ul">
        {lectures.map((lecture) => (
          <li className="delete-li" key={lecture._id}>
            {lecture.topic} - {lecture.date} - {lecture.time} - {lecture.location}
            <button className="delete-button" onClick={() => handleDelete(lecture._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DeleteLecture;

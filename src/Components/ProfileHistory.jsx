import React, { useEffect, useState } from 'react';
import './ProfileHistory.css'
import axios from 'axios';

function SidebarItem({ item }) {
  const [reminders, setReminders] = useState([]);


  useEffect(() => {

    // Fetch the user's reminder history
    axios.get('http://localhost:5000/api/user/reminders/')
      .then((response) => {
        setReminders(response.data);
      })
      .catch((error) => {
        console.error('Error fetching reminder history:', error);
      });
  }, []);


  
    return (
      <div className="reminder-history-container">
      <h2 className='reminder-history'>Reminder History</h2>
      <ul className='reminder-item '>
        {reminders.map((reminder) => (
          <li key={reminder._id}>
            <strong className='reminder-title'>{reminder.title}</strong> - {reminder.description}
            {/* You can display additional reminder details here */}
          </li>
        ))}
      </ul>
      </div>
    );
}

export default SidebarItem;

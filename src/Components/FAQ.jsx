// FAQ.js
import React from 'react';
import './FAQ.css'; // Import the CSS file

const FAQ = () => {
  const faqData = [
    {
      question: 'How do I create a new reminder?',
      answer: 'To create a new reminder, click the "Add Reminder" button and fill in the details.'
    },
    {
      question: 'Can I edit or delete a reminder?',
      answer: 'Yes, you can edit or delete a reminder by clicking on the reminder in the list and using the respective options.'
    },
    // Add more FAQ items as needed
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-header">FAQ</h1>
      <ul>
        {faqData.map((item, index) => (
          <li key={index} className="faq-item">
            <h3 className="faq-question">{item.question}</h3>
            <p className="faq-answer">{item.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;

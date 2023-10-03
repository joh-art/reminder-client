import React, { useState } from 'react';
import './SideBar.css'; // Import your CSS file
import { Link } from 'react-router-dom';
// import { useParams } from "react-router-dom";
import {  BsGearFill} from 'react-icons/bs';
import avatar from "./image/avatarmale.png";

function Sidebar({Id}) {
  const [openMenus, setOpenMenus] = useState({}); // Use an object to track open/closed state for each menu
  // const { lectureId } = useParams();
  const toggleOpen = (index) => {
    // Toggle the state of the clicked menu item
    setOpenMenus((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const sidebarData = [
    {
      title: 'Schedule',
      icon: {BsGearFill},
      childrens: [
        {
          title: 'Lecture Schedule',
          icon: 'bi-house-fill',
          path: '/LectureSchedule',
        },
        {
          title: 'Create Schedule',
          icon: 'bi-info-circle-fill',
          path: '/CreateLecture',
        },
        {
          title: 'Edit Schedule',
          icon: 'bi-phone-fill',
          path: `/EditLecture/${Id}`,
     
        },
        {
          title: 'FAQ',
          icon: 'bi-question-circle-fill',
          path: '/FAQ',
        },
      ],
    },
    {
      title: 'Set Reminder',
      icon: 'bi-gear-fill',
      childrens: [
        {
          title: 'Create Reminder',
          icon: 'bi-house-fill',
          path: '/ReminderForm',
        },
        {
          title: 'Edit Reminder',
          icon: 'bi-info-circle-fill',
          path: `/ReminderEdit/${Id}`,
        },
        {
          title: 'View Reminder',
          icon: 'bi-phone-fill',
          path: '/ReminderList',
        },
        {
          title: 'FAQ',
          icon: 'bi-question-circle-fill',
          path: '/FAQ',
        },
      ],
    },
    // Add more menu items as needed
  ];

  return (
    <div className="sidebar">
    <Link to="/UserProfile">
             <img className="avatar" src={avatar} alt="reminder" />
           </Link>
      <ul className="list-unstyled">
        {sidebarData.map((item, index) => (
          <li key={index} className="sidebar-item">
            <div
              className={`sidebar-title ${openMenus[index] ? 'open' : ''}`}
              onClick={() => toggleOpen(index)} // Pass the index to the toggle function
            >
              <span>
                {item.icon && <i className={item.icon}></i>}
                {item.title}
              </span>
              {item.childrens && (
                <i
                  className={`bi-chevron-${openMenus[index] ? 'up' : 'down'} toggle-btn`}
                ></i>
              )}
            </div>
            {item.childrens && (
              <ul className={`submenu ${openMenus[index] ? 'open' : ''}`}>
                {item.childrens.map((child, childIndex) => (
                  <li key={childIndex}>
                    <a href={child.path || '#'} className="submenu-item">
                      {child.icon && <i className={child.icon}></i>}
                      {child.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;




















// import React , {useState} from 'react';

// import { Link } from 'react-router-dom';

// // import 'react-pro-sidebar/dist/css/styles.css'; 
// import './SideBar.css'; // Import your CSS file
// import avatar from "./image/avatarmale.png";

// function Sidebar() {
//   // Create state variables to track the visibility of dropdown menus
//   const [dropdown1Visible, setDropdown1Visible] = useState(false);
//   const [dropdown2Visible, setDropdown2Visible] = useState(false);

//   const toggleDropdown1 = () => {
//     setDropdown1Visible(!dropdown1Visible);
//     setDropdown2Visible(false); // Close other dropdown when opening this one
//   };

//   const toggleDropdown2 = () => {
//     setDropdown2Visible(!dropdown2Visible);
//     setDropdown1Visible(false); // Close other dropdown when opening this one
//   };

//   return (
//     <div className="sidebar-content">
//       <Link to="/UserProfile">
//         <img className="avatar" src={avatar} alt="reminder" />
//       </Link>
//       <ul className="sidebar-items">
//         <li>
//           <Link to="/LectureSchedule">Lecture Schedule</Link>
//         </li>
//         <li>
//           <Link to="/ReminderForm">Reminder Form</Link>
//         </li>
//         <li>
//           <Link to="/ReminderList">Reminder List</Link>
//         </li>
//         <li className="dropdown">
//           <span onClick={toggleDropdown1}>
//             <Link to="/Business">Our Business</Link>
//           </span>
//           <div className={`dropdown-content ${dropdown1Visible ? 'show' : ''}`}>
//             {/* Dropdown links */}
//             <Link to="/Free">Free Trade Zone</Link>
//             <Link to="/Mining">Mining</Link>
//           </div>
//         </li>
//         <li className="dropdown">
//           <span onClick={toggleDropdown2}>
//             <Link to="">Investment</Link>
//           </span>
//           <div className={`dropdown-content ${dropdown2Visible ? 'show' : ''}`}>
//             {/* Dropdown links */}
//             <Link to="/investment">Investment Sector</Link>
//             <Link to="/investWithUs">Invest With Us</Link>
//             <Link to="/investProced">Investment Procedures</Link>
//             <Link to="/investDownload">Downloads</Link>
//           </div>
//         </li>
//       </ul>
     
//     </div>
//   );
// }

// export default Sidebar;

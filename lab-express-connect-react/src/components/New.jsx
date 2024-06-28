// New.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./New.css"; // Import CSS file

const New = () => {
  const navigate = useNavigate();
  const API = import.meta.env.VITE_BASE_URL;

  // State to hold the form data
  const [newLog, setNewLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: true,
    daysSinceLastCrisis: 0,
  });

  // Handle input change
  const handleChange = (e) => {
    setNewLog({ ...newLog, [e.target.name]: e.target.value });
  };

  // Handle checkbox change
  const handleCheckBox = (e) => {
    setNewLog((prevState) => ({
      ...prevState,
      mistakesWereMadeToday: !prevState.mistakesWereMadeToday,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Log response data
        navigate("/logs"); // Navigate to logs list after successful submission
      })
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <fieldset className="fieldset">
        <legend className="legend">New Log</legend>
        <div className="input-group">
          <label htmlFor="captainName" className="label">
            Captain Name:
          </label>
          <input
            type="text"
            id="captainName"
            name="captainName"
            placeholder="Captain Name"
            value={newLog.captainName}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="input-group">
          <label htmlFor="title" className="label">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            value={newLog.title}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="input-group">
          <label htmlFor="post" className="label">
            Post:
          </label>
          <textarea
            id="post"
            name="post"
            placeholder="Post"
            value={newLog.post}
            onChange={handleChange}
            className="input textarea"
          />
        </div>
        <div className="input-group checkbox-label">
          <label className="label">
            <input
              type="checkbox"
              name="mistakesWereMadeToday"
              checked={newLog.mistakesWereMadeToday}
              onChange={handleCheckBox}
              className="checkbox"
            />
            Mistakes Were Made Today
          </label>
        </div>
        <div className="input-group">
          <label htmlFor="daysSinceLastCrisis" className="label">
            Days Since Last Crisis:
          </label>
          <input
            type="number"
            id="daysSinceLastCrisis"
            name="daysSinceLastCrisis"
            placeholder="Days Since Last Crisis"
            value={newLog.daysSinceLastCrisis}
            onChange={handleChange}
            className="input"
          />
        </div>
        <button type="submit" className="button">
          Submit
        </button>
      </fieldset>
    </form>
  );
};

export default New;

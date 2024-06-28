import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Edit.css";

const Edit = () => {
  const API = import.meta.env.VITE_BASE_URL;
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });
  const navigate = useNavigate();
  const { index } = useParams();

  useEffect(() => {
    fetch(`${API}/${index}`)
      .then((res) => res.json())
      .then((res) => {
        setLog((prevState) => res);
      })
      .catch((err) => console.error(err));
  }, [index]);

  const handleChange = (e) => {
    setLog((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleCheckBox = () => {
    setLog((prevState) => {
      return {
        ...prevState,
        mistakesWereMadeToday: !prevState.mistakesWereMadeToday,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${API}/${index}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(log),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("Edit log: ", res);
        navigate(`/logs/${index}`);
      })
      .catch((err) => console.error(err));
  };

  if (!log) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <h2>Edit Log</h2>
      <input
        type="text"
        placeholder="Captain Name"
        name="captainName"
        value={log.captainName}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={log.title}
        onChange={handleChange}
      />
      <textarea
        placeholder="Post"
        name="post"
        value={log.post}
        onChange={handleChange}
      />
      <div className="checkbox-group">
        <input
          type="checkbox"
          id="mistakes"
          checked={log.mistakesWereMadeToday}
          onChange={handleCheckBox}
        />
        <label htmlFor="mistakes">Mistakes Were Made Today</label>
      </div>
      <input
        type="number"
        placeholder="Days Since Last Crisis"
        name="daysSinceLastCrisis"
        value={log.daysSinceLastCrisis}
        onChange={handleChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Edit;

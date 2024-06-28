import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [logs, setLogs] = useState([]);
  const API = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setLogs(data);
      })
      .catch((err) => console.error("Error fetching logs:", err));
  }, []);

  return (
    <div>
      {logs.map((log, i) => (
        <div key={i}>
          <Link to={`/logs/${i}`}>{log.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [logs, setLogs] = useState([]);
  const [sortedLogs, setSortedLogs] = useState([]);
  const [sortOption, setSortOption] = useState("none");
  const API = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setLogs(data);
        setSortedLogs(data); // Initialize sortedLogs with fetched data
      })
      .catch((err) => console.error("Error fetching logs:", err));
  }, []);

  // Function to handle sorting logs
  const handleSort = (sortByField) => {
    let sorted;
    if (sortByField === "captainName") {
      sorted = [...logs].sort((a, b) =>
        a.captainName.localeCompare(b.captainName)
      );
    } else if (sortByField === "daysSinceLastCrisis") {
      sorted = [...logs].sort(
        (a, b) => a.daysSinceLastCrisis - b.daysSinceLastCrisis
      );
    } else if (sortByField === "mistakes") {
      sorted = logs.filter((log) => log.mistakesWereMadeToday);
    } else if (sortByField === "noMistakes") {
      sorted = logs.filter((log) => !log.mistakesWereMadeToday);
    } else {
      sorted = logs; // Default to original order
    }
    setSortedLogs(sorted);
    setSortOption(sortByField);
  };

  return (
    <div className="log-list">
      <div className="controls">
        <div className="dropdown-container">
          <select
            value={sortOption}
            onChange={(e) => handleSort(e.target.value)}
            className="dropdown"
          >
            <option value="none">Sort By</option>
            <option value="captainName">Captain Name</option>
            <option value="daysSinceLastCrisis">Days Since Last Crisis</option>
            <option value="mistakes">Mistakes Made Today</option>
            <option value="noMistakes">No Mistakes Made Today</option>
          </select>
        </div>
      </div>
      {sortedLogs.map((log, i) => (
        <div className="log-item" key={i}>
          <Link to={`/logs/${i}`} className="log-link">
            {log.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;

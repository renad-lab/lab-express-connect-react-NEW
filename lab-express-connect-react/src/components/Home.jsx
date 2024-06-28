import React, { useState, useEffect } from "react";

const Home = () => {
  const [logs, setLogs] = useState([]);
  const [selectedLog, setSelectedLog] = useState(null);
  const API = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    fetch(API)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setLogs(data);
      })
      .catch((err) => console.error("Error fetching logs:", err));
  }, [API]);

  const toggleLogDetails = (index) => {
    setSelectedLog(selectedLog === index ? null : index);
  };

  return (
    <div>
      {logs.map((log, i) => (
        <div key={i}>
          <h2 onClick={() => toggleLogDetails(i)} style={{ cursor: "pointer" }}>
            {log.title}
          </h2>
          {selectedLog === i && (
            <div>
              <p>Captain: {log.captainName}</p>
              <p>Post: {log.post}</p>
              <p>
                Mistakes Were Made Today:{" "}
                {log.mistakesWereMadeToday ? "Yes" : "No"}
              </p>
              <p>Days Since Last Crisis: {log.daysSinceLastCrisis}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Home;

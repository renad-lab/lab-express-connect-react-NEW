import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";
import "./Show.css";

const Show = () => {
  const [log, setLog] = useState(null);
  const { index } = useParams();
  const navigate = useNavigate();
  const API = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    fetch(`${API}/${index}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Log not found");
        }
        return res.json();
      })
      .then((data) => setLog(data))
      .catch((err) => {
        console.error("Error fetching log:", err);
        navigate("/404", { replace: true });
      });
  }, []);

  const handleDelete = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this log entry?"
    );
    if (confirmed) {
      fetch(`${API}/${index}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => {
          navigate("/logs");
        })
        .catch((err) => console.error("Error deleting log:", err));
    }
  };

  return (
    <div className="log-container">
      {log ? (
        <div className="log-box">
          <h2>{log.title}</h2>
          <p>Captain Name: {log.captainName}</p>
          <p>Post: {log.post}</p>
          <p>Days Since Last Crisis: {log.daysSinceLastCrisis}</p>
          <p>
            Mistakes Were Made Today: {log.mistakesWereMadeToday ? "Yes" : "No"}
          </p>
          <br />
          <div className="button-group">
            <Link to={`/logs/${index}/edit`}>
              <button>Edit</button>
            </Link>
            <button onClick={handleDelete}>Delete</button>
          </div>
          <br />
          <button onClick={() => navigate("/logs")}>Back</button>
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Show;

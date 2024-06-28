import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const Show = () => {
  const [log, setLog] = useState(null);
  const { index } = useParams();
  const navigate = useNavigate();
  const API = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    fetch(`${API}/${index}`)
      .then((res) => res.json())
      .then((res) => setLog(res))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = () => {
    fetch(`${API}/${index}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => navigate("/logs"))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      {log && (
        <div>
          <h2>{log.title}</h2>
          <p>{log.post}</p>
          <br />
          <Link to={`/logs/${index}/edit`}>
            <button>Edit</button>
          </Link>
          <br />
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Show;

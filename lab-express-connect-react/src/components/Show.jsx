// import React, { useState, useEffect } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";

// const Show = () => {
//   const [log, setLog] = useState(null);
//   const { index } = useParams();
//   const navigate = useNavigate();
//   const API = import.meta.env.VITE_BASE_URL;

//   useEffect(() => {
//     fetch(`${API}/${index}`)
//       .then((res) => res.json())
//       .then((res) => setLog(res))
//       .catch((err) => console.error(err));
//   }, []);

//   const handleDelete = () => {
//     fetch(`${API}/${index}`, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then((res) => navigate("/logs"))
//       .catch((err) => console.error(err));
//   };

//   return (
//     <div>
//       {log && (
//         <div>
//           <h2>{log.title}</h2>
//           <p>{log.post}</p>
//           <br />
//           <Link to={`/logs/${index}/edit`}>
//             <button>Edit</button>
//           </Link>
//           <br />
//           <button onClick={handleDelete}>Delete</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Show;
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
      .then((data) => setLog(data))
      .catch((err) => console.error("Error fetching log:", err));
  }, []);

  const handleDelete = () => {
    fetch(`${API}/${index}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/logs");
      })
      .catch((err) => console.error("Error deleting log:", err));
  };

  return (
    <div>
      {log ? (
        <div>
          <h2>{log.title}</h2>
          <p>Captain Name: {log.captainName}</p>
          <p>Post: {log.post}</p>
          <p>
            Mistakes Were Made Today: {log.mistakesWereMadeToday ? "Yes" : "No"}
          </p>
          <p>Days Since Last Crisis: {log.daysSinceLastCrisis}</p>
          <br />
          <div style={{ display: "flex", gap: "10px" }}>
            <Link to={`/logs/${index}/edit`}>
              <button>Edit</button>
            </Link>
            <button onClick={handleDelete}>Delete</button>
          </div>
          <br />
          <button onClick={() => navigate("/logs")}>Back</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Show;

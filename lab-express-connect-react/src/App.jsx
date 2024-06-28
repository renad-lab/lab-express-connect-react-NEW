// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import NavBar from "./components/NavBar";
// import Home from "./components/Home";
// import New from "./components/New";
// import Show from "./components/Show";
// import Edit from "./components/Edit";
// import "./App.css";

// const App = () => {
//   return (
//     <div>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Navigate to="/logs" replace />} />
//         <Route path="/logs" element={<Home />} />
//         <Route path="/logs/new" element={<New />} />
//         <Route path="/logs/:index" element={<Show />} />
//         <Route path="/logs/:index/edit" element={<Edit />} />
//         {/* Route for handling unmatched routes */}
//         <Route path="*" element={<div>Page Not Found</div>} />
//       </Routes>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import New from "./components/New";
import Show from "./components/Show";
import Edit from "./components/Edit";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <NavBar className="navbar" />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/logs" replace />} />
          <Route path="/logs" element={<Home />} />
          <Route path="/logs/new" element={<New />} />
          <Route path="/logs/:index" element={<Show />} />
          <Route path="/logs/:index/edit" element={<Edit />} />
          {/* Route for handling unmatched routes */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

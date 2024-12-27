import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";

const App = () => {
  const [authToken, setAuthToken] = useState(localStorage.getItem("token") || null);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={authToken ? <Navigate to="/home" /> : <Navigate to="/login" />}
        />
        
        <Route
          path="/login"
          element={authToken ? <Navigate to="/home" /> : <Login setAuthToken={setAuthToken} />}
        />

        <Route
          path="/home"
          element={
            <ProtectedRoute authToken={authToken}>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

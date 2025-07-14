import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import LaptopList from "./components/LaptopList";
import LaptopDetail from "./components/LaptopDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Laptop Management
          </Link>
          <div className="navbar-nav">
            {user ? (
              <Link className="nav-link" to="/laptops">
                Laptops
              </Link>
            ) : (
              <Link className="nav-link" to="/">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route
            path="/laptops"
            element={user ? <LaptopList /> : <Navigate to="/" />}
          />
          <Route
            path="/laptops/:id"
            element={user ? <LaptopDetail /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

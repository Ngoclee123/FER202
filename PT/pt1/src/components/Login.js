import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Modal, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError("Username and password are required.");
      return;
    }
    setError("");
    try {
      const response = await axios.get("http://localhost:3000/UserAccounts", {
        params: { username, password },
      });
      const user = response.data.find(
        (u) =>
          u.username === username &&
          u.password === password &&
          u.status === "active"
      );
      if (user) {
        setUser(user);
        setModalMessage(`Welcome, ${username} login Successful!`);
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
          navigate("/laptops");
        }, 2000);
      } else {
        setError("Invalid username or password!");
      }
    } catch (error) {
      setError("Server error. Please try again later.");
      console.error("Login error:", error);
    }
  };

  Login.propTypes = {
    setUser: PropTypes.func.isRequired,
  };

  return (
    <div className="login-container">
      <h2 className="text-center mb-4 fw-bold">Login</h2>
      {error && (
        <Alert variant="danger" dismissible onClose={() => setError("")}>
          {error}
        </Alert>
      )}
      <form
        onSubmit={handleLogin}
        className="p-3 border rounded shadow-sm bg-white login-form"
      >
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
      </Modal>
    </div>
  );
}

export default Login;

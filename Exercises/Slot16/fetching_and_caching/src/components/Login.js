import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setStatus("Vui lòng điền đầy đủ tên đăng nhập và mật khẩu!");
      return;
    }
    try {
      const response = await axios.get("http://localhost:3000/useraccounts", {
        params: { username, password },
      });
      const user = response.data.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        setStatus(`Đăng nhập thành công với username: ${username}`);
        onLogin(user);
        navigate("/posts");
      } else {
        setStatus("Tên đăng nhập hoặc mật khẩu không đúng!");
      }
    } catch (error) {
      setStatus("Có lỗi xảy ra khi đăng nhập.");
      console.error("Lỗi khi đăng nhập:", error);
    }
  };

  return (
    <div>
      <h1>Đăng nhập</h1>
      {status && (
        <div style={{ color: status.includes("thành công") ? "green" : "red" }}>
          {status}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;

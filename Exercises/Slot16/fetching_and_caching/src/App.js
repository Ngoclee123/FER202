import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Lazy load components
const Login = lazy(() => import("./components/Login"));
const PostList = lazy(() => import("./components/PostList"));
const CreatePost = lazy(() => import("./components/CreatePost"));
const EditPost = lazy(() => import("./components/EditPost"));
const DeletePost = lazy(() => import("./components/DeletePost"));

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <Router>
      <div className="App">
        <h1>Quản lý Bài Viết</h1>
        <Suspense fallback={<div>Đang tải...</div>}>
          <Routes>
            <Route path="/" element={<Login onLogin={handleLogin} />} />
            {user && (
              <>
                <Route path="/posts" element={<PostList />} />
                <Route path="/create" element={<CreatePost />} />
                <Route path="/edit/:id" element={<EditPost />} />
                <Route path="/delete/:id" element={<DeletePost />} />
              </>
            )}
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      setStatus("Vui lòng điền đầy đủ tiêu đề và nội dung!");
      return;
    }
    const newPost = { title, content };
    try {
      await axios.post("http://localhost:3000/posts", newPost);
      setStatus("Bài viết đã được tạo thành công!");
      setTitle("");
      setContent("");
      setTimeout(() => navigate("/posts"), 1000);
    } catch (error) {
      setStatus("Có lỗi xảy ra khi tạo bài viết.");
    }
  };

  return (
    <Container className="mt-4">
      <h2>Thêm bài viết mới</h2>
      {status && (
        <Alert variant={status.includes("lỗi") ? "danger" : "success"}>
          {status}
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Tiêu đề</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập tiêu đề"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Nội dung</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Nhập nội dung"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="primary" className="me-2">
          Tạo bài viết
        </Button>
        <Button variant="secondary" as={Link} to="/posts">
          Quay lại
        </Button>
      </Form>
    </Container>
  );
};

export default CreatePost;

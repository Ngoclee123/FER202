import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Container, ListGroup, Button, Alert, Row, Col } from "react-bootstrap";

const PostList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setStatus("Lỗi khi lấy dữ liệu!");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Bạn chắc chắn muốn xóa bài viết này?")) {
      try {
        await axios.delete(`http://localhost:3000/posts/${id}`);
        setData(data.filter((post) => post.id !== id));
        setStatus("Đã xóa bài viết thành công!");
      } catch (error) {
        setStatus("Lỗi khi xóa bài viết!");
      }
    }
  };

  if (loading) {
    return <Container className="mt-4">Đang tải...</Container>;
  }

  return (
    <Container className="mt-4">
      <Row className="mb-3">
        <Col>
          <h2>Danh sách bài viết</h2>
        </Col>
        <Col className="text-end">
          <Button variant="primary" as={Link} to="/create">
            + Tạo bài viết mới
          </Button>
        </Col>
      </Row>
      {status && (
        <Alert variant={status.includes("Lỗi") ? "danger" : "success"}>
          {status}
        </Alert>
      )}
      {!data || data.length === 0 ? (
        <Alert variant="info">Không có bài viết nào!</Alert>
      ) : (
        <ListGroup>
          {data.map((post) => (
            <ListGroup.Item
              key={post.id}
              className="d-flex justify-content-between align-items-start"
            >
              <div>
                <h5>{post.title}</h5>
                <div>{post.content}</div>
              </div>
              <div>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  as={Link}
                  to={`/edit/${post.id}`}
                  className="me-2"
                >
                  Chỉnh sửa
                </Button>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => handleDelete(post.id)}
                >
                  Xóa
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Container>
  );
};

export default PostList;

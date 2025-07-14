import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col, Card, Spinner } from "react-bootstrap";

function LaptopList() {
  const [laptops, setLaptops] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [allLaptops, setAllLaptops] = useState([]); // Lưu toàn bộ danh sách để lọc

  useEffect(() => {
    fetchLaptops();
  }, []);

  const fetchLaptops = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/Laptops");
      setLaptops(response.data);
      setAllLaptops(response.data); // Lưu bản gốc
      setError("");
    } catch (error) {
      setError("Failed to load laptops. Please try again.");
      console.error("Error fetching laptops:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setLaptops(allLaptops); // Reset nếu không nhập gì
      return;
    }
    const filteredLaptops = allLaptops.filter((laptop) =>
      laptop.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setLaptops(filteredLaptops);
    if (filteredLaptops.length === 0) {
      setError("No laptops found matching the search term.");
    } else {
      setError("");
    }
  };

  if (loading)
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  if (error)
    return <div className="alert alert-danger text-center">{error}</div>;

  return (
    <div className="laptop-list">
      <h2 className="text-center mb-4 fw-bold">Laptop Management</h2>
      <div className="mb-4 text-center">
        <input
          type="text"
          className="form-control w-50 d-inline-block me-2"
          placeholder="Search by brand"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
      <Row>
        {laptops.map((laptop) => (
          <Col md={4} sm={6} xs={12} key={laptop.id} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + laptop.image}
                alt={laptop.model}
              />
              <Card.Body>
                <Card.Title className="fw-bold">
                  {laptop.brand} {laptop.model}
                </Card.Title>
                <Card.Text>
                  <strong>Year:</strong> {laptop.year}
                </Card.Text>
                <Card.Text>
                  <strong>Price:</strong> {laptop.price}
                </Card.Text>
                <Link to={`/laptops/${laptop.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default LaptopList;

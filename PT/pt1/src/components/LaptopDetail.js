import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Card, Spinner, Alert } from "react-bootstrap";

function LaptopDetail() {
  const { id } = useParams();
  const [laptop, setLaptop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLaptop = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await axios.get(`http://localhost:3000/Laptops/${id}`);
        console.log("API Response:", response.data);
        if (response.data) {
          setLaptop(response.data);
        } else {
          setError(`No laptop found with ID ${id}.`);
        }
      } catch (error) {
        setError("Server error or laptop not found.");
        console.error(
          "Fetch error:",
          error.response ? error.response.data : error.message
        );
      } finally {
        setLoading(false);
      }
    };
    fetchLaptop();
  }, [id]);

  if (loading)
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  if (error || !laptop) {
    return (
      <div className="text-center mt-5">
        <h2>404 Not Found</h2>
        <Alert variant="danger">
          {error || `Laptop with ID ${id} not found.`}
        </Alert>
        <Link to="/laptops" className="btn btn-primary mt-3">
          Back to List
        </Link>
      </div>
    );
  }

  return (
    <div className="laptop-detail">
      <h2 className="text-center mb-4 fw-bold">Laptop Details</h2>
      <Card className="w-100 mx-auto" style={{ maxWidth: "600px" }}>
        <Card.Img
          variant="top"
          src={process.env.PUBLIC_URL + laptop.image}
          alt={laptop.model}
          style={{ height: "300px", objectFit: "contain", padding: "10px" }}
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
          <Card.Text>
            <strong>Description:</strong> {laptop.description}
          </Card.Text>
          <Link to="/laptops" className="btn btn-primary">
            Back to List
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LaptopDetail;

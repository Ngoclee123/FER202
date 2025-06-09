import "./App.css";
import NameList from "./components/NameList";
import UserProfile from "./components/UserProfile";
import Welcome from "./components/Welcome";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import StudentCard from "./components/StudentCard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const userData = { name: "ngoclee@fe.edu.vn", age: 39 };
  const namesList = ["ngoclee@fe.edu.vn", "test@fe.edu.vn"];
  const students = [
    {
      name: "ngoclee@fe.edu.vn",
      age: 39,
      avatar: "/images/av1.png",
    },
    {
      name: "ngoclee@fe.edu.vn",
      age: 40,
      avatar: "/images/av2.png",
    },
    {
      name: "ngoclee@fe.edu.vn",
      age: 41,
      avatar: "/images/av3.png",
    },
  ];

  return (
    <div className="container mt-4">
      <Welcome name="traltb@fe.edu.vn" />
      <UserProfile user={userData} />
      <NameList names={namesList} />
      <Container>
        <h1 className="my-4 text-center">Student information</h1>
        <Row>
          {students.map((student, index) => (
            <Col key={index} sm={12} md={4}>
              <StudentCard student={student} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;

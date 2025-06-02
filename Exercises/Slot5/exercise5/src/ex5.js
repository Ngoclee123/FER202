import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App5.css";

const students = [
  {
    id: "DE160182",
    name: "Nguyễn Hữu Quốc Khánh",
    location: "DaNang",
    img: "/a1.jpg",
  },
  {
    id: "DE160377",
    name: "Choy Vinh Thiên",
    location: "QuangNam",
    img: "/a2.jpg",
  },
  {
    id: "DE160547",
    name: "Đỗ Nguyễn Phúc",
    location: "QuangNam",
    img: "/a3.jpg",
  },
  {
    id: "DE170049",
    name: "Lê Hoàng Minh",
    location: "DaNang",
    img: "/a4.jpg",
  },
];

const StudentCard = ({ student, onStatusChange }) => {
  const handleSubmit = (e) => e.preventDefault();

  return (
    <div className="col-md-6 mb-4">
      <div className="card shadow-sm">
        <img
          src={student.img}
          className="card-img-top img-fluid"
          alt={student.name}
        />
        <div className="card-body">
          <h5 className="card-title text-center">{student.name}</h5>
          <div className="d-flex justify-content-center align-items-center mb-2 text-secondary">
            <span className="me-2">{student.id}</span>
            <span>📍{student.location}</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-center gap-4 mb-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name={`attendance-${student.id}`}
                  id={`absent-${student.id}`}
                  checked={student.status === "Absent"}
                  onChange={() => onStatusChange(student.id, "Absent")}
                />
                <label
                  className="form-check-label"
                  htmlFor={`absent-${student.id}`}
                >
                  Absent
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name={`attendance-${student.id}`}
                  id={`present-${student.id}`}
                  checked={student.status === "Present"}
                  onChange={() => onStatusChange(student.id, "Present")}
                />
                <label
                  className="form-check-label"
                  htmlFor={`present-${student.id}`}
                >
                  Present
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-warning btn-sm mt-2 w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-orange">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="/Logo.png"
            alt="FPT University"
            className="img-fluid"
            style={{ width: "150px", height: "100px" }}
          />
        </a>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <span className="nav-item mx-2">🏠</span>
            <a className="nav-link text-custom-orange" href="#">
              Trang chủ
            </a>
            <span className="nav-item mx-2">ℹ️</span>
            <a className="nav-link text-custom-orange" href="#">
              Ngành học
            </a>
            <span className="nav-item mx-2">🪪</span>
            <a className="nav-link text-custom-orange" href="#">
              Tuyển sinh
            </a>
            <span className="nav-item mx-2">📃</span>
            <a className="nav-link text-custom-orange" href="#">
              Sinh viên
            </a>
          </div>
        </div>
        <form className="d-flex ms-auto">
          <label htmlFor="search-input" className="me-2">
            Search
          </label>
          <input
            type="text"
            className="form-control"
            id="search-input"
            aria-label="Search"
            style={{ width: "200px" }}
          />
        </form>
      </div>
    </nav>
  </header>
);

const Banner = () => (
  <div className="banner-wrapper">
    <div className="container p-0">
      <img src="/a5.jpg" alt="Banner Image" className="img-fluid w-100" />
    </div>
  </div>
);

const Footer = () => (
  <footer className="text-white py-4 footer-orange">
    <div className="container d-flex justify-content-between align-items-center flex-column flex-md-row text-dark">
      <div>
        <h6>Our Address</h6>
        <p>11, Hà Huy Tập Đà Nẵng</p>
        <p>📞 +84023111111</p>
        <p>☎️ +852 8765 4321</p>
        <p>
          ✉️{" "}
          <a href="#" style={{ textDecoration: "none" }}>
            fptudn@fpt.edu.vn
          </a>
        </p>
      </div>
      <div className="d-flex gap-3 mt-3 mt-md-0 footer-white-icons">
        <a href="#">G+</a>
        <a href="#">f</a>
        <a href="#">in</a>
        <a href="#">🐦</a>
        <a href="#">📺</a>
        <a href="#">✉</a>
      </div>
    </div>
    <div className="text-center mt-3 text-dark">© Copyright 2023</div>
  </footer>
);

const Exercise5 = () => {
  const [studentList, setStudentList] = useState(
    students.map((student) => ({ ...student, status: "Absent" }))
  );

  const handleStatusChange = (id, newStatus) => {
    setStudentList((prevList) =>
      prevList.map((student) =>
        student.id === id ? { ...student, status: newStatus } : student
      )
    );
  };

  return (
    <div>
      <Header />
      <Banner />
      <div className="container">
        <nav className="custom-breadcrumb" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Students
            </li>
          </ol>
        </nav>
      </div>
      <div className="container mt-4">
        <div className="text-center mb-4">
          <h2>Students Detail</h2>
        </div>
        <div className="row">
          {studentList.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onStatusChange={handleStatusChange}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Exercise5;

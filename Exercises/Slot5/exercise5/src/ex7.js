import React from "react";

function Exercise7() {
  return (
    <div>
      {/* Cards Columns */}
      <div className="mb-4">
        <h1>Cards Columns</h1>
        <div className="row">
          {/* Blue Card */}
          <div className="col-md-4">
            <div
              className="card"
              style={{
                backgroundColor: "#007bff",
                border: "none",
                padding: "15px",
              }}
            >
              <img
                src="./xe.jpg"
                className="card-img-top"
                alt="Car"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div
                className="card-body text-center"
                style={{ color: "black", padding: "10px 0" }}
              >
                <p className="card-text mb-0">
                  Some text inside the first card
                </p>
              </div>
            </div>
          </div>

          {/* Orange Card */}
          <div className="col-md-4">
            <div
              className="card"
              style={{
                backgroundColor: "#ffc107",
                border: "none",
                padding: "15px",
              }}
            >
              <img
                src="./xe.jpg"
                className="card-img-top"
                alt="Car"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div
                className="card-body text-center"
                style={{ color: "black", padding: "10px 0" }}
              >
                <p className="card-text mb-0">
                  Some text inside the first card
                </p>
              </div>
            </div>
          </div>

          {/* Red Card */}
          <div className="col-md-4">
            <div
              className="card"
              style={{
                backgroundColor: "#dc3545",
                border: "none",
                padding: "15px",
              }}
            >
              <img
                src="./xe.jpg"
                className="card-img-top"
                alt="Car"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div
                className="card-body text-center"
                style={{ color: "black", padding: "10px 0" }}
              >
                <p className="card-text mb-0">
                  Some text inside the first card
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exercise7;

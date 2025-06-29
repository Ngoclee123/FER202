import React from "react";
import "./App.css";
import UserProfile from "./components/UserProfile";
import UserProfile2 from "./components/UserProfile2";
import MyForm from "./components/MyForm";
import AdvancedForm from "./components/AdvancedForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const handleFormSubmit = (formData) => {
    console.log("Form submitted:", formData);
  };

  return (
    <div className="App">
      <h1 className="text-center">PropTypes Examples</h1>

      <div className="container example-section">
        <h2>Example 1: Basic PropTypes</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <UserProfile name="Nguyễn Văn A" age={25} />
          </div>
          <div className="col-md-6 mb-4">
            <UserProfile name="" age={25} />
          </div>
          <div className="col-md-6 mb-4">
            <UserProfile name="Nguyễn Văn B" age="twenty five" />
          </div>
          <div className="col-md-6 mb-4">
            <UserProfile name="Nguyễn Văn C" age={null} />
          </div>
        </div>
      </div>

      <div className="container example-section">
        <h2>Example 2: Form with PropTypes</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            {/* Trường hợp hợp lệ */}
            <div className="mb-4">
              <h5>Trường hợp hợp lệ:</h5>
              <UserProfile2
                name="Nguyễn Văn A"
                age={25}
                onSubmit={handleFormSubmit}
              />
            </div>

            {/* Trường hợp name không hợp lệ */}
            <div className="mb-4">
              <h5>Trường hợp name không hợp lệ:</h5>
              <UserProfile2 name="" age={25} onSubmit={handleFormSubmit} />
            </div>

            {/* Trường hợp tuổi không hợp lệ */}
            <div className="mb-4">
              <h5>Trường hợp tuổi không hợp lệ:</h5>
              <UserProfile2
                name="Nguyễn Văn B"
                age="twenty five"
                onSubmit={handleFormSubmit}
              />
            </div>

            {/* Trường hợp không nhập tuổi */}
            <div className="mb-4">
              <h5>Trường hợp không nhập tuổi:</h5>
              <UserProfile2
                name="Nguyễn Văn C"
                age={null}
                onSubmit={handleFormSubmit}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container example-section">
        <h2>Example 3: Form with useReducer</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <MyForm title="Đăng Ký Người Dùng" onSubmit={handleFormSubmit} />
          </div>
        </div>
      </div>

      <div className="container example-section">
        <h2>Example 4: Advanced Validation Form</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <AdvancedForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

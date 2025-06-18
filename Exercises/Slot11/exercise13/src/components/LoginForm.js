import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  // Hàm xác thực email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Hàm xác thực mật khẩu
  const validatePassword = (password) => {
    return password.length >= 8;
  };

  // useEffect để xác thực form
  useEffect(() => {
    const validateForm = () => {
      const newErrors = {
        email: "",
        password: "",
      };

      // Xác thực email
      if (formData.email && !validateEmail(formData.email)) {
        newErrors.email = "Email không hợp lệ";
      }

      // Xác thực mật khẩu
      if (formData.password && !validatePassword(formData.password)) {
        newErrors.password = "Mật khẩu phải có ít nhất 8 ký tự";
      }

      setErrors(newErrors);

      // Kiểm tra form có hợp lệ không
      const isValid =
        validateEmail(formData.email) &&
        validatePassword(formData.password) &&
        formData.email !== "" &&
        formData.password !== "";

      setIsFormValid(isValid);
    };

    validateForm();
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log("Form submitted:", formData);
      // Xử lý submit form ở đây
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          isInvalid={!!errors.email}
          placeholder="Nhập email của bạn"
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Mật khẩu</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          isInvalid={!!errors.password}
          placeholder="Nhập mật khẩu của bạn"
        />
        <Form.Control.Feedback type="invalid">
          {errors.password}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!isFormValid}>
        Đăng nhập
      </Button>
    </Form>
  );
};

export default LoginForm;

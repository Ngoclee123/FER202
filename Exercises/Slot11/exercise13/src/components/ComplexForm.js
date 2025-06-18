import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const ComplexForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    country: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    gender: "",
    country: "",
    agreeToTerms: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  // useEffect để xác thực form
  useEffect(() => {
    const validateForm = () => {
      const newErrors = {
        name: "",
        gender: "",
        country: "",
        agreeToTerms: "",
      };

      // Xác thực tên
      if (!formData.name.trim()) {
        newErrors.name = "Vui lòng nhập tên";
      }

      // Xác thực giới tính
      if (!formData.gender) {
        newErrors.gender = "Vui lòng chọn giới tính";
      }

      // Xác thực quốc gia
      if (!formData.country) {
        newErrors.country = "Vui lòng chọn quốc gia";
      }

      // Xác thực điều khoản
      if (!formData.agreeToTerms) {
        newErrors.agreeToTerms = "Bạn phải đồng ý với điều khoản";
      }

      setErrors(newErrors);

      // Kiểm tra form có hợp lệ không
      const isValid =
        formData.name.trim() !== "" &&
        formData.gender !== "" &&
        formData.country !== "" &&
        formData.agreeToTerms;

      setIsFormValid(isValid);
    };

    validateForm();
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
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
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Tên</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          isInvalid={!!errors.name}
          placeholder="Nhập tên của bạn"
        />
        <Form.Control.Feedback type="invalid">
          {errors.name}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Giới tính</Form.Label>
        <div>
          <Form.Check
            type="radio"
            id="male"
            name="gender"
            value="male"
            label="Nam"
            checked={formData.gender === "male"}
            onChange={handleChange}
            isInvalid={!!errors.gender}
          />
          <Form.Check
            type="radio"
            id="female"
            name="gender"
            value="female"
            label="Nữ"
            checked={formData.gender === "female"}
            onChange={handleChange}
            isInvalid={!!errors.gender}
          />
        </div>
        <Form.Control.Feedback type="invalid">
          {errors.gender}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCountry">
        <Form.Label>Quốc gia</Form.Label>
        <Form.Select
          name="country"
          value={formData.country}
          onChange={handleChange}
          isInvalid={!!errors.country}
        >
          <option value="">Chọn quốc gia</option>
          <option value="vn">Việt Nam</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="jp">Japan</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors.country}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAgree">
        <Form.Check
          type="checkbox"
          name="agreeToTerms"
          label="Tôi đồng ý với các điều khoản và điều kiện"
          checked={formData.agreeToTerms}
          onChange={handleChange}
          isInvalid={!!errors.agreeToTerms}
        />
        <Form.Control.Feedback type="invalid">
          {errors.agreeToTerms}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!isFormValid}>
        Gửi
      </Button>
    </Form>
  );
};

export default ComplexForm;

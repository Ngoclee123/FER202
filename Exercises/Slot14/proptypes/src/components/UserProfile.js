import React from "react";
import PropTypes from "prop-types";

// Component UserProfile
const UserProfile = ({ name, age }) => {
  // Kiểm tra nếu `name` không được truyền hoặc rỗng
  if (!name || typeof name !== "string") {
    return (
      <div className="user-profile">
        <h3 className="mb-3">Thông Tin Người Dùng</h3>
        <p className="text-danger">
          Tên không hợp lệ hoặc không được cung cấp!
        </p>
      </div>
    );
  }

  // Kiểm tra nếu `age` không được nhập hoặc không phải là một số hợp lệ
  if (!age) {
    return (
      <div className="user-profile">
        <h3 className="mb-3">Thông Tin Người Dùng</h3>
        <p className="mb-2">Tên: {name}</p>
        <p className="text-danger">Tuổi không được để trống!</p>
      </div>
    );
  } else if (isNaN(age)) {
    return (
      <div className="user-profile">
        <h3 className="mb-3">Thông Tin Người Dùng</h3>
        <p className="mb-2">Tên: {name}</p>
        <p className="text-danger">Tuổi phải là một số hợp lệ!</p>
      </div>
    );
  }

  return (
    <div className="user-profile">
      <h3 className="mb-3">Thông Tin Người Dùng</h3>
      <p className="mb-2">Tên: {name}</p>
      <p className="mb-0">Tuổi: {age}</p>
    </div>
  );
};

// Xác định PropTypes cho UserProfile
UserProfile.propTypes = {
  name: PropTypes.string.isRequired, // 'name' phải là một chuỗi và là bắt buộc
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // 'age' có thể là chuỗi hoặc số và là bắt buộc
};

export default UserProfile;

import React, { useState } from "react";
import "./App.css";

function App() {
  // 1. Counter Example
  const [count, setCount] = useState(0);

  // 2. Input State Example
  const [inputValue, setInputValue] = useState("");

  // 3. Toggle Example
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <h2>1. Counter Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
      <button onClick={() => setCount(count - 1)}>Giảm</button>
      <hr />

      <h2>2. Input State Example</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Nhập gì đó..."
      />
      <p>Giá trị nhập: {inputValue}</p>
      <hr />

      <h2>3. Toggle Example</h2>
      <button onClick={() => setShow(!show)}>
        {show ? "Ẩn nội dung" : "Hiện nội dung"}
      </button>
      {show && (
        <div style={{ marginTop: 10, color: "blue" }}>
          Đây là nội dung có thể ẩn/hiện
        </div>
      )}
    </div>
  );
}

export default App;

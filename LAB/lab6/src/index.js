import React from "react";
import ReactDOM from "react-dom/client"; // ✅ đúng cho React 18/19
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

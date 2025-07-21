import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import store from './store';
import ProductList from './ProductList';
import Cart from './Cart';
import ProductForm from './ProductForm';
import 'bootstrap/dist/css/bootstrap.min.css';  

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <div className="container">
            <Link className="navbar-brand" to="/">Shopping Cart</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">Cart</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add-product">Add Product</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/add-product" element={<ProductForm />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
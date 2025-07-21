import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ProductList from './ProductList';
import Cart from './Cart';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS ở đây

const App = () => {
  return (
    <Provider store={store}>
      <div className="container mt-5">  {/* Container chính cho layout */}
        <h1 className="text-center mb-4">Shopping Cart with Redux</h1>
        <ProductList />
        <Cart />
      </div>
    </Provider>
  );
};

export default App;
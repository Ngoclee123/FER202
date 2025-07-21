import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);

  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
    <div>
      <h2 className="mb-3">Cart</h2>
      {cartItems.length === 0 ? (
        <>
          <p className="alert alert-info">Cart is empty</p> 
        </>
      ) : (
        <div className="row">
          {cartItems.map(item => (
            <div key={item.id} className="col-md-6 mb-4">  
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">ID: {item.id}</p>
                  <p className="card-text">Price: ${item.price}</p>
                  <p className="card-text">Catalogs: {item.catalogs.join(', ')}</p>
                  <p className="card-text">Quantity: {item.quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <h3 className="mt-4 text-end">Total Cost: ${totalCost.toFixed(2)}</h3>  
    </div>
  );
};
export default Cart;
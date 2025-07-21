import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, updateCart, removeFromCart } from './actions/cartActions';

const products = [
  {
    id: '123456',
    name: 'Example Product 1',
    price: 9.99,
    description: 'This is an example product.',
    catalogs: ['catalog1', 'catalog2'],
  },
  {
    id: '789012',
    name: 'Example Product 2',
    price: 19.99,
    description: 'Another example product.',
    catalogs: ['catalog3', 'catalog4'],
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  return (
    <div className="mb-5">
      <h2 className="mb-3">Product List</h2>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-6 mb-4">  
            <div className="card h-100">  
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">ID: {product.id}</p>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">Catalogs: {product.catalogs.join(', ')}</p>
              </div>
              <div className="card-footer d-flex justify-content-between">  
                <button className="btn btn-primary" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
                <button className="btn btn-warning" onClick={() => dispatch(updateCart(product.id, 5))}>Update to Cart (Set Qty to 5)</button>
                <button className="btn btn-danger" onClick={() => dispatch(removeFromCart(product.id))}>Delete from Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductList;
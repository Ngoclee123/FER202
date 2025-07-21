import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from './actions/productActions';
import { addToCart } from './actions/cartActions';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);

  useEffect(() => {
    dispatch(loadProducts());  
  }, [dispatch]);

  return (
    <div className="mb-5">
      <h2 className="mb-3">Product List</h2>
      {products.length === 0 ? (
        <p className="alert alert-info">Loading products...</p>
      ) : (
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
                <div className="card-footer">
                  <button className="btn btn-primary" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
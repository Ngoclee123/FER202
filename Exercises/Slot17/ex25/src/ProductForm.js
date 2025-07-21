import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './actions/productActions';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [catalogs, setCatalogs] = useState('');

  const handleSubmit = async (e) => {  
    e.preventDefault();
    const newProduct = {
      name,
      price: parseFloat(price),
      catalogs: catalogs.split(',').map(cat => cat.trim()),
    };
    await dispatch(addProduct(newProduct));  
    navigate('/');  
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>Add New Product</h2>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Catalogs (comma-separated)</label>
            <input type="text" className="form-control" value={catalogs} onChange={(e) => setCatalogs(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-success">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
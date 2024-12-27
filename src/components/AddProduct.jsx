import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProductForm = ({ addProduct,logout }) => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = { name: productName, price };
    addProduct(newProduct);
    setProductName('');
    setPrice('');
  };

  return (
    <div className="add-product-form">
      <div className="logout-container">
        <button onClick={logout} className="logout-btn">Logout</button>
      </div>
      <h2>Add Product</h2>
      <form onSubmit={handleAddProduct}>
        <div>
          <label>Product Name:</label>
          <input 
            type="text" 
            value={productName} 
            onChange={(e) => setProductName(e.target.value)} 
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input 
            type="number" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            required
          />
        </div>
        <button className='btn' type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;

import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const ProductList = ({ products, deleteProduct }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="product-list">
      <h2>Product List</h2>

      {products.length > 0 && (
        <div className="search-container">
          <input
            type="text"
            placeholder="Search products by name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-bar"
          />
        </div>
      )}

      {filteredProducts.length === 0 ? (
        <p>No product found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>
                  <button onClick={() => deleteProduct(product.name)} className="delete-btn">
                    <FaTimes color="white" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductList;

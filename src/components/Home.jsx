import React, { useState } from 'react';
import AddProductForm from './AddProduct';
import ProductList from './ProductList';
import { message } from 'antd';

const Home = () => {
    const [products, setProducts] = useState([]);

    const addProduct = (product) => {
        const exists = products.some(p => p.name === product.name);
        if (!exists) {
          setProducts([...products, product]);
          message.success('Product added successfully!');
        } else {
          message.warning('Product already exists!');
        }
      };
    

  const deleteProduct = (productName) => {
    setProducts(products.filter(product => product.name !== productName));
    message.success("Product deleted");
  };

  const logout = () => {
    localStorage.removeItem('token');
    console.log("logged out");
    window.location.href = '/login'; 
  };

  return (
    <>
     <AddProductForm addProduct={addProduct} logout={logout} />
     <ProductList products={products} deleteProduct={deleteProduct} />
    </>
  );
};

export default Home;
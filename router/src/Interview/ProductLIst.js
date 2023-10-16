import React, { useState } from 'react';

const ProductList = ({ products }) => {
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);

  const handleNextProduct = () => {
    setSelectedProductIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousProduct = () => {
    setSelectedProductIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const selectedProduct = products[selectedProductIndex];

  return (
    <div>
      <h2>Selected Product</h2>
      {selectedProduct && (
        <div>
          <h3>{selectedProduct.name}</h3>
          <p>Age: {selectedProduct.Age}</p>
          <p>Email: {selectedProduct.Email}</p>
        </div>
      )}
      <div>
        <button onClick={handlePreviousProduct}>Previous Product</button>
        <button onClick={handleNextProduct}>Next Product</button>
      </div>
    </div>
  );
};

export default ProductList;

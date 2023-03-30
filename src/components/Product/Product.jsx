import React from 'react';
import './Product.css'
const Product = (props) => {
  const { img, name, price, seller, ratings } = props.product;

  return (
    <div className='product'>
      <div>
        <img src={img} alt="" />
        <div className='product-info'>
          <h6 className='product-name'>{name}</h6>
          <p>Price: ${price}</p>
          <p><small>Manufacturer: {seller}</small></p>
          <p><small>Rating: {ratings} start</small></p>
        </div>
        <button className='btn-cart'>Add to Cart</button>
      </div>

    </div>
  );
};

export default Product;
import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
  // const cart = props.cart;
  // const {cart} = props;
  // total price and shipping
  let totalPrice = 0;
  let totalShipping = 0;
  // for(const product of cart){
  //   total = total + product.price;
  // totalShipping = totalShipping +    product.shipping;
  // }
  cart.forEach(product => {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
  });
const tax = (totalPrice * 7)/100;
const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className='cart'>
      <h4 className='cart-title'>Order Summary</h4>
      <p>Selected items: {cart.length}
      </p>
      <p>Total Price: ${totalPrice} </p>
      <p>Total Shipping: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h6>Grand total: ${grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
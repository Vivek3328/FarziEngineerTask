import React, { useContext, useEffect } from 'react'
import "./ProductCartStyle.css"
import { QuantityContext } from '../Context/QuantityContext';
import { AiFillDelete } from "react-icons/ai";

export default function ProductCart({ cartItem, setCartItem }) {


  const { quantity, setQuantity } = useContext(QuantityContext);


  const handleIncrement = () => {
    var item = cartItem;
    item.quantity = cartItem.quantity + 1;
    setQuantity(quantity + 1);
    localStorage.setItem('cartItem', JSON.stringify(item));
    //setQuantity(newQuantity);
  };

  const handleDecrement = () => {
    if (cartItem.quantity > 1) {
      var item = cartItem;
      item.quantity = cartItem.quantity - 1;
      setQuantity(quantity - 1);
      localStorage.setItem('cartItem', JSON.stringify(item));
    } else {

    }
  };

  const handleDelete = () => {
    localStorage.removeItem('cartItem');
    setCartItem(null); // Update cartItem state or perform other necessary operations
    setQuantity(0);
  };

  return (
    <div className="perfume">
      <div className='perfume-first'>
        <img src={cartItem.image} alt="" />
        <div className="perfume-info">
          <h6>{cartItem.name}</h6>
        </div>
        <button className='perfume-delete' onClick={handleDelete}>
          <AiFillDelete />
        </button>
      </div>

      <div className="price-quantity">
        <div className='price-quan-first'>
          <span className="price"><div> &#8377;</div> <div> {cartItem.price}</div></span>
          <span className='rupee'> &#8377;650</span>
          <span className='price-save'> 1% OFF</span>
        </div>
        <div className="quantity">
          <button className="minus-button" onClick={handleDecrement} disabled={quantity === 1} >-</button>
          <span className="quantity-value">{quantity}</span>
          <button className="plus-button" onClick={handleIncrement} >+</button>
        </div>
      </div>
    </div>
  )
}

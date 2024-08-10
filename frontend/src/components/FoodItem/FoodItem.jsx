import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../context/StoreContext';
import LinesEllipsis from 'react-lines-ellipsis'

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);
  const quantity = cartItems[id] || 0; // Get the quantity of the item in the cart

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={url + "images/" + image} alt="" className='food-item-image' />


        {quantity === 0 ? (
          <img
            className='add'
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt='Add to cart'
          />
        ) : (
          <div className='food-item-counter'>
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt='Remove from cart'
            />
            <p>{quantity}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt='Add to cart'
            />
          </div>
        )}

      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating stars" />
        </div>
        <p className="food-item-desc">
          <LinesEllipsis
            text={description}
            maxLine='2'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />
        </p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;

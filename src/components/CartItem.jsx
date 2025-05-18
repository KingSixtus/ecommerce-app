import { useState } from 'react';

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (newQuantity) => {
    const qty = Math.max(1, newQuantity);
    setQuantity(qty);
    onQuantityChange(qty);
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-info">
        <h4>{item.title}</h4>
        <p>${item.price}</p>
        <div className="quantity-controls">
          <button onClick={() => handleQuantityChange(quantity - 1)}>-</button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
            min="1"
          />
          <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
        </div>
      </div>
      <button className="remove-item" onClick={onRemove}>×</button>
    </div>
  );
};

export default CartItem;
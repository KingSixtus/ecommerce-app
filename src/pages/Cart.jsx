import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../store/cartSlice';
import CartItem from '../components/CartItem';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.map(item => (
        <CartItem 
          key={item.id}
          item={item}
          onRemove={() => dispatch(removeItem(item.id))}
          onQuantityChange={(quantity) => 
            dispatch(updateQuantity({ id: item.id, quantity }))
          }
        />
      ))}
      <div className="total-price">
        Total: ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
};


export default Cart;
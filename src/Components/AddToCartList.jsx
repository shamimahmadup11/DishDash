import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, increaseQuantity, decreaseQuantity } from '../utils/CartSlice';

const AddToCartList = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const notifyRemove = () => toast("Item removed from cart!");

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>There is nothing in your cart.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => dispatch(increaseQuantity({ id: item.id }))}>+</button>
                <button onClick={() => dispatch(decreaseQuantity({ id: item.id }))}>-</button>
                <button onClick={() => {
                  dispatch(removeItem({ id: item.id }));
                  notifyRemove();
                }}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default AddToCartList;
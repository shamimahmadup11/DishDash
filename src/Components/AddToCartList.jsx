
import { useSelector } from 'react-redux';

const AddToCartList = () => {
  const cart = useSelector(state => state.cart.items);

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
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AddToCartList;

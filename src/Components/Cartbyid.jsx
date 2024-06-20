import '../footer.css';
import { Link } from 'react-router-dom';
import { addItem } from '../utils/CartSlice';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cartbyid = (props) => {
  const dispatch = useDispatch();
  const notify = () => toast("Added to Cart!");

  const handleButton = () => {
    const item = {
      id: props.id,
      image: props.image,
      name: props.name,
    };
    dispatch(addItem(item));
    notify();
  };

  return (
    <div>
      <div className="leftPart" style={{ float: 'left', width: '50%' }}>
        <div className="image-name">
          <img src={props.image} alt="loading image .." />
          <h3>{props.name}</h3>
        </div>

        <div className="orderAddToCart">
          <Link to="/PaymentComponent">
            <button>Order</button>
          </Link>
          <button onClick={handleButton}>Add to Cart</button>
          <ToastContainer />
        </div>
      </div>

      <div className="writePart" style={{ float: 'right', width: '50%' }}>
        <div><h3>Difficulty:</h3> {props.difficulty}</div>
        <div><h3>Review Count:</h3> {props.reviewCount}</div>
        <div><h3>Prep Time (minutes):</h3> {props.prepTimeMinutes}</div>
        <div><h3>Cook Time (minutes):</h3> {props.cookTimeMinutes}</div>
        <div><h3>Servings:</h3> {props.servings}</div>
        <div><h3>Meal Type:</h3> {props.mealType.join(', ')}</div>

        <div><h4>Ingredients:</h4></div>
        <ul>
          {props.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <div><h4>Instructions:</h4></div>
        <ul>
          {props.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>

        <div><h4>Tags:</h4></div>
        <ul>
          {props.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );    
}

export default Cartbyid;
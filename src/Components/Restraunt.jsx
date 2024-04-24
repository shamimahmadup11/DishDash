
import '../Restraunt.css'
const Restraunt = ({name, image, caloriesPerServing, cuisine, rating }) => {
  return (
    <div className="restrount">
<div className="Card">
      <img src={image} alt={name}  height={'300px'}  width={'350px'}/>
      <div className="name">{name}</div>
      <div className='cuisines'> {cuisine} </div>
      {/* <div>Difficulty: {difficulty}</div> */}
      <div className='rating'><h3> Rating:{rating}</h3></div>
      {/* <div>Review Count: {reviewCount}</div> */}
      {/* <div>Prep Time (minutes): {prepTimeMinutes}</div> */}
      {/* <div>Cook Time (minutes): {cookTimeMinutes}</div> */}
      <div>Calories Per Serving: {caloriesPerServing}</div>
      {/* <div>Servings: {servings}</div> */}
      {/* <div>Meal Type: {mealType.join(', ')}</div> */}
      {/* <div>Ingredients:</div> */}
      {/* <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul> */}
      {/* <div>Instructions:</div> */}
      {/* <ol>
        {instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol> */}
      {/* <div>Tags:</div> */}
      {/* <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul> */}
    </div>
    </div>
    
  );
}

export default Restraunt;

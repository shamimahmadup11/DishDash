/* eslint-disable react/prop-types */
import '../footer.css'

const Cartbyid = (props) => {
    console.log(props)
    return (
        <div>
            {/* {props.id} */}
            <div className="leftPart" style={{ float: 'left', width: '50%' }}>
                <div className="image-name">
                    <img src={props.image} alt="loading image .." />
                    <h3>{props.name}</h3>
                </div>

                <div className="incrimentDecrimentbtn"> <button>+</button>
                    <button>-</button></div>
                <div className="orderAddToCart">
                    <button>Oreder</button>
                    <button>Add to Cart</button>
                </div>
            </div>

            <div className="writePart" style={{ float: 'right', width: '50%' }}>
                <div> <h3>Difficulty:</h3> {props.difficulty}</div>
                <div> <h3>Review Count:</h3> {props.reviewCount}</div>
                <div><h3>Prep Time :</h3> (minutes): {props.prepTimeMinutes}</div>
                <div> <h3>Cook Time:</h3> (minutes): {props.cookTimeMinutes}</div>
                <div> <h3>Servings:</h3> {props.servings}</div>
                <div> <h3>Meal Type:</h3> {props.mealType.join(', ')}</div>
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
    )
}

export default Cartbyid

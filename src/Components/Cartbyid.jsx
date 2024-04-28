/* eslint-disable react/prop-types */
import '../footer.css'

const Cartbyid = (props) => {
    // console.log(props)
    return (
        <div>
            {/* {props.id} */}
            <div className="leftPart" style={{ float: 'left', width: '50%' }}>
                <div className="image-name">
                    <img src={props.image} alt="loading image .." />
                    <h3>{props.name}</h3>
                </div>

                {/* <div className="incrimentDecrimentbtn"> <button>+</button>
                    <button>-</button></div> */}
                <div className="orderAddToCart">
                    <button>Order</button>
                    <button>Add to Cart  
                    {/* <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M17 11H5a2 2 0 0 0-2-2v-4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 0-2 2zM8 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H8zm10 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                            />
                        </svg> */}
                    </button>
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

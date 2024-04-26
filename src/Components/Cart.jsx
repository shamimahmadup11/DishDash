import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import Cartbyid from "./Cartbyid";



const Cart = () => {
    const [dataId , setDataId]=useState([]);
    useEffect(()=>{
        getCartData();
    },[]);
    async function getCartData(){
        try {
            const response = await fetch('https://dummyjson.com/recipes');
            const data = await response.json();
            setDataId(data?.recipes);
            console.log(data?.recipes)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }

    const {id}=useParams();
  return (
    <div>
    {dataId.map((res) => {
        // Convert id to string before comparison
        return id.toString() === res.id.toString() ? <Cartbyid key={res.id} {...res} /> : null;
       
    })}
</div>
  )
}

export default Cart


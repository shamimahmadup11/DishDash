
// import  { useEffect, useState } from "react";
// import Restraunt from "./Restraunt";
// import '../Body.css';
// import Shimer from './Shimer'
// import {Link} from 'react-router-dom'
// import Menu from "./Menu"

// function filterData(searchText, sowData) {
//   return sowData.filter((data) => {
//     return data.name.toLowerCase().includes(searchText.toLowerCase());
//   });
// }

// const Body = () => {
//   const [searchText, setSearchText] = useState('');
//   const [sowData, setSowData] = useState([]); 

//   useEffect(() => {
//     getRestraunt();

//   }, []);



//   async function getRestraunt() {
//     try {
//       const response = await fetch('https://dummyjson.com/recipes');
//       const data = await response.json();
//       setSowData(data?.recipes);
//       console.log(data?.recipes[0]?.id)
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }

//   return sowData.length===0?(<Shimer/>): (
//     <div className="body">
//       <input className="input-field"
//         type="text" 
//         value={searchText}
//         placeholder="Search"
//         onChange={(e) => {setSearchText(e.target.value)
//           if(e.target.value===""){
//             setSowData(sowData);
//           }else{
//             const filteredData = filterData(searchText, sowData);
//             setSowData(filteredData);
//           }

//         }
//         } 
//       />
//       <button className="btn" onClick={() => {
//         const filteredData = filterData(searchText, sowData);
//         setSowData(filteredData);
//       }}>Search</button>

//       <div className="restrount">
//         {sowData.map((res) => (

//             <Link to="./Cart"><Restraunt key={res.id} {...res}/> </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;


import { useEffect, useState } from "react";
import Restraunt from "./Restraunt";
import '../Body.css';
import Shimer from './Shimer';
import { Link } from 'react-router-dom';

function filterData(searchText, sowData) {
  return sowData.filter((data) => {
    return data.name.toLowerCase().includes(searchText.toLowerCase());
  });
}

const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [sowData, setSowData] = useState([]);

  useEffect(() => {
    getRestraunt();
  }, []);

  async function getRestraunt() {
    try {
      const response = await fetch('https://dummyjson.com/recipes');
      const data = await response.json();
      setSowData(data?.recipes);
      // console.log(data?.recipes[0]?.id)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return sowData.length === 0 ? (<Shimer />) : (
    <div className="body">
      <input
        className="input-field"
        type="text"
        value={searchText}
        placeholder="Search"
        onChange={(e) => {
          setSearchText(e.target.value);
          if (e.target.value === "") {
            setSowData(sowData);
          } else {
            const filteredData = filterData(searchText, sowData);
            setSowData(filteredData);
          }
        }}
      />
      <button
        className="btn"
        onClick={() => {
          const filteredData = filterData(searchText, sowData);
          setSowData(filteredData);
        }}>Search</button>

      <div className="restrount">
        {sowData.map((res) => (
          <div key={res.id}>
            {/* Dynamically generate the path based on restaurant ID */}
            <Link to={`/cart/${res.id}`}>
              <Restraunt {...res} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;




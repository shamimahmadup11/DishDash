
import  { useEffect, useState } from "react";
import Restraunt from "./Restraunt";
import '../Body.css';
import Shimer from './Shimer'

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
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return sowData.length===0?(<Shimer/>): (
    <div className="body">
      <input className="input-field"
        type="text" 
        value={searchText}
        placeholder="Search"
        onChange={(e) => {setSearchText(e.target.value)
          if(e.target.value===""){
            setSowData(sowData);
          }else{
            const filteredData = filterData(searchText, sowData);
            setSowData(filteredData);
          }
         
        }
        } 
      />
      <button className="btn" onClick={() => {
        const filteredData = filterData(searchText, sowData);
        setSowData(filteredData);
      }}>Search</button>
      
      <div className="restrount">
        {sowData.map((res) => (
          <Restraunt key={res.id} {...res} />
        ))}
      </div>
    </div>
  );
};

export default Body;

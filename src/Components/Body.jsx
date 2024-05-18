
import { useEffect, useState } from "react";
import Restraunt from "./Restraunt";
import "../Body.css";
import Shimer from "./Shimer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [sowData, setSowData] = useState([]);
  const [originalData, setOriginalData] = useState([]); 

  useEffect(() => {
    getRestraunt();
  }, []);

  async function getRestraunt() {
    try {
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();
      setSowData(data?.recipes);
      setOriginalData(data?.recipes); // set original data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleSearch = (e) => {
    const searchTextValue = e.target.value;
    setSearchText(searchTextValue);
    if (searchTextValue === "") {
      setSowData(originalData); 
    } else {
      const filteredData = originalData.filter((data) => {
        return data.name.toLowerCase().includes(searchTextValue.toLowerCase());
      });
      setSowData(filteredData);
    }
  };

  const isOnline = useOnline();
  console.log(isOnline);
  if (isOnline) {
    return (
      <>
        <h1> OOPS !</h1>
        <h1> Your Internet Connectivity is note stable </h1>
      </>
    );
  }

  return sowData.length === 0 ? (
    <Shimer />
  ) : (
    <div className="body">
      <input
        className="input-field"
        type="text"
        value={searchText}
        placeholder="Search"
        onChange={handleSearch}
      />
      <button
        className="btn"
        onClick={() => {
          const filteredData = originalData.filter((data) => {
            return data.name.toLowerCase().includes(searchText.toLowerCase());
          });
          setSowData(filteredData);
        }}
      >
        Search
      </button>

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
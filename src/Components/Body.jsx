

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
  const [rating, setRating] = useState(0);

  useEffect(() => {
    getRestraunt();
  }, []);

  async function getRestraunt() {
    try {
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();
      setSowData(data?.recipes);
      setOriginalData(data?.recipes);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleSearch = (e) => {
    const searchTextValue = e.target.value;
    setSearchText(searchTextValue);
    filterData(searchTextValue, rating);
  };

  const handleRatingChange = (e) => {
    if(e.target.value<=5 || e.target.vlaue>0){
      const ratingValue = e.target.value;
      setRating(ratingValue);
      filterData(searchText, ratingValue);
    }
    else{
      return ;
    }
    
  };

  const filterData = (searchTextValue, ratingValue) => {
    const filteredData = originalData.filter((data) => {
      return (
        data.name.toLowerCase().includes(searchTextValue.toLowerCase()) &&
        data.rating >= ratingValue
      );
    });
    setSowData(filteredData);
  };

  const isOnline = useOnline();
  console.log(isOnline);
  if (!isOnline) {
    return (
      <>
        <h1> OOPS !</h1>
        <h1> Your Internet Connectivity is not stable </h1>
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
          filterData(searchText, rating);
        }}
      >
        Search
      </button>
      <label htmlFor="number">Short by rating:</label>
      <input
        type="number"
        className="number-input"
        value={rating}
        onChange={handleRatingChange}
      />

      <div className="restrount">
        {sowData.map((res) => (
          <div key={res.id}>
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

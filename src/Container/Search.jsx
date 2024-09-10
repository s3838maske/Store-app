import React, { useEffect, useState } from "react";
// import { searchItemApi } from "../Constants/constant";
import { useDispatch } from "react-redux";
import { sagaSearchProductList } from "../Store/Products/productAction";


function Search() {
  const searchAction = useDispatch();

  const [searchInput, setSearchInput] = useState([]);
  
  const handleSearch = (e) => {
    let value = e.target.value;
    setSearchInput(value);
  };

  useEffect(() => {
    const getData = setTimeout(() => {
      searchAction(sagaSearchProductList(searchInput));
      
    }, 400);

    return () => clearTimeout(getData);
  }, [searchInput]);

  return (
    <>
      <div className="flex grow justify-center">
        <input
          className="flex h-10 w-[250px] mx-3 rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          onChange={handleSearch}
          placeholder="Search"
        ></input>
      </div>
    </>
  );
}

export default Search;

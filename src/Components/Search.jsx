import axios from "axios";
import React, { useEffect, useState } from "react";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = (e) => {
    let value = e.target.value;
    setSearchInput(value);

    const filteredResults = searchResult.filter((result) =>
      result.title.includes(value)
    );
    setSearchResult(filteredResults);
};

useEffect(() => {
    if (!searchInput) {
        return;
    }
    
    const searchApi = setTimeout(() => {
        axios
        .get(`https://api.escuelajs.co/api/v1/products/?title=${searchInput}`)
        .then((response) => {
            // console.log(response.data);
            setSearchResult(response.data);
           
        })
        .catch((error) => {
            console.log(error);
        });
    }, 1000);

    return () => clearTimeout(searchApi);
  }, [searchInput]);

  return (
    <>
      <div className="flex grow justify-center">
        <input
          className="flex h-10 w-[250px] mx-3 rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          value={searchInput}
          onChange={handleSearch}
          placeholder="Search"
        ></input>
      </div>
      <ul>
        {searchResult.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </>
  );
}

export default Search;

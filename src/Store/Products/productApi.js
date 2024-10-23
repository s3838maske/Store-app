import axios from "axios";
import { API_ENDPOINTS } from "../../shared/constants";

const productData = async (pagination) => {
    try {
      //  const res = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=0&limit=${pagination}`);
       const res = await axios.get(API_ENDPOINTS.paginationApi+pagination);
     return res.data
    } catch (error) {
      console.log(error);
    } 
  };


  const handleSearchApi = async (searchInput) => {
    try {
     const response = await axios.get(API_ENDPOINTS.searchItemApi + searchInput);
     return response.data
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleCategoryApi = async(id) => {
    try {
      let res = await axios.get(`${API_ENDPOINTS.categoryApi+id}/products`)
      // console.log(res.data);
      return res.data
    } catch (error) {
      console.log(error);
    }

  }


export  {productData , handleSearchApi, handleCategoryApi}

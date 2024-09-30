import axios from "axios";
import { categoryApi, productApi } from "../../Constants/constant";
import { searchItemApi } from "../../Constants/constant";


const productData = async () => {
    try { const res = await axios.get(productApi);
     return res.data
    } catch (error) {
      console.log(error);
    }
  };
  



  const handleSearchApi = async (searchInput) => {
    try {
     const response = await axios.get(searchItemApi + searchInput);
     return response.data
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleCategoryApi = async(id) => {
    try {
      let res = await axios.get(`${categoryApi+id}/products`)
      console.log(res.data);
      return res.data
    } catch (error) {
      console.log(error);
    }

  }


export  {productData , handleSearchApi, handleCategoryApi}

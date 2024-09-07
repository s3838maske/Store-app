import axios from "axios";
import { productApi } from "../../Constants/constant";


const productData = async () => {
    try {
      // const res = await axios.get("https://fakestoreapi.com/products");
     const res = await axios.get(productApi);
     return res.data
    } catch (error) {
      console.log(error);
    }
  };
  
  export default productData;
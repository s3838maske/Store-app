import axios from "axios";


const productData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
     return res.data
    } catch (error) {
      console.log(error);
    }
  };
  
  export default productData;
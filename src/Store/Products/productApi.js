import axios from "axios";
import { productApi } from "../../Constants/constant";
// import { searchItemApi } from "../../Constants/constant";


const productData = async () => {
    try {
      // const res = await axios.get("https://fakestoreapi.com/products");
     const res = await axios.get(productApi);
     console.log(res.data);
     return res.data
    } catch (error) {
      console.log(error);
    }
  };
  




// const handleSearchApi = (searchInput) => {
 
//     axios.get(searchItemApi + searchInput)
//       .then((response) => {
//         console.log(response)
//         return response
//       })
//       .catch((error) => console.log(error));
  

// };


export  {productData}

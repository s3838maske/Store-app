import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ItemDetailsCard from "../Container/ItemDetailsCard";
import Loading from "../Components/common/Loading";
import { API_ENDPOINTS } from "../shared/constants";

export default function ItemDetails() {
  const { id } = useParams();
  const [itemData, setItemData] = useState({});
  const[loading, setLoading] = useState(false)

  const productDetailApi = async () => {
    setLoading(true)
    try {
      let response = await axios.get(
        API_ENDPOINTS.productApi+id
      );

      setItemData(response.data);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  };

  useEffect(() => {
    productDetailApi();
  }, [id]);

  useEffect(() => {}, [itemData]);

  return (
    <>
      {
        loading?<Loading />:
        <ItemDetailsCard productData={itemData} />
      }
      
    </>
  );
}

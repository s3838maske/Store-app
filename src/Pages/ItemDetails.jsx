import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ItemDetailsCard from "../Container/ItemDetailsCard";
import Loading from "../Components/common/Loading";

export default function ItemDetails() {
  const { id } = useParams();
  const [itemData, setItemData] = useState({});

  const productDetailApi = async () => {
    try {
      let response = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );

      setItemData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    productDetailApi();
  }, [id]);

  useEffect(() => {}, [itemData]);

  return (
    <>
      
        <ItemDetailsCard productData={itemData} />
      
    </>
  );
}

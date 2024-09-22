const productList = (payload) => {
  return {
    type: "CALL_PRODUCT_LIST",
    payload: payload,
  };
};

const sagaProductList = (payload) => {
  return {
    type: "SAGA_CALL_PRODUCT_LIST",
    payload: payload,
  };
};

const searchProduct = (payload) => {
  return {
    type: "SEARCH_PRODUCT_LIST",
    payload: payload,
  };
};

const sagaSearchProductList = (payload) => {
  return {
    type: "SAGA_SEARCH_PRODUCT_LIST",
    payload: payload,
  };
};

export { productList, searchProduct, sagaSearchProductList, sagaProductList };
